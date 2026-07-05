// Packages the vite build output (dist/client + dist/server) into Vercel's
// Build Output API v3 format (.vercel/output). This project's TanStack Start
// setup has no nitro/vercel adapter wired in — `vite build` alone produces a
// plain client+server pair that Vercel doesn't know how to route, which is
// why every path 404s after deploy without this step.
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distClient = path.join(root, "dist", "client");
const distServer = path.join(root, "dist", "server");
const output = path.join(root, ".vercel", "output");

if (!existsSync(distClient) || !existsSync(distServer)) {
  console.error("dist/client or dist/server missing — run `vite build` first.");
  process.exit(1);
}

await rm(output, { recursive: true, force: true });

// Static assets served directly by Vercel's edge/CDN layer.
await mkdir(path.join(output, "static"), { recursive: true });
await cp(distClient, path.join(output, "static"), { recursive: true });

// SSR entry, packaged as an Edge Function (matches server.ts's Web-standard
// fetch(request) handler — no Node req/res adapter needed).
const funcDir = path.join(output, "functions", "index.func");
await mkdir(funcDir, { recursive: true });
await cp(distServer, funcDir, { recursive: true });
await writeFile(
  path.join(funcDir, "index.js"),
  `import handler from "./server.js";\nexport default (request) => handler.fetch(request, {}, {});\n`,
);
await writeFile(
  path.join(funcDir, ".vc-config.json"),
  JSON.stringify({ runtime: "edge", entrypoint: "index.js" }, null, 2),
);

await writeFile(
  path.join(output, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [{ handle: "filesystem" }, { src: "/(.*)", dest: "/index" }],
    },
    null,
    2,
  ),
);

console.log("Wrote .vercel/output (static + index edge function).");
