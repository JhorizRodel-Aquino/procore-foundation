import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-label mb-3 text-accent">SIGNAL LOST · 404</div>
        <h1 className="font-display text-7xl uppercase tracking-tight text-foreground">Not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Nothing detected at this coordinate. The page may have moved or never existed.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center gap-2 border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-background"
        >
          <span className="mono-label">RETURN</span>
          <span>Home</span>
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono-label mb-3 text-danger">SYSTEM FAULT</div>
        <h1 className="font-display text-3xl uppercase tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-accent bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-background"
          >
            Try again
          </button>
          <a href="/" className="border border-line px-4 py-2 text-sm font-semibold hover:bg-surface">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#fcfdfd" },
      { title: "PROCORE Engineering+ | Concrete Coring & Material Testing PH" },
      {
        name: "description",
        content:
          "PROCORE Engineering+ by Centris — concrete coring, rebar/ferro scanning, rebound hammer, and compressive strength testing. Signed and sealed by licensed structural engineers.",
      },
      { name: "keywords", content: "concrete coring, rebar scanning, ferro scanning, rebound hammer test, compressive strength test, material testing Philippines, as-built, structural engineer, Centris, PROCORE" },
      { name: "author", content: "PROCORE Engineering+ by Centris" },
      { property: "og:site_name", content: "PROCORE Engineering+" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "PROCORE Engineering+ | Concrete Coring & Material Testing" },
      { property: "og:description", content: "Non-destructive testing, precision coring, and certified structural results — signed and sealed." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PROCORE Engineering+" },
      { name: "twitter:description", content: "Concrete coring, ferro scanning, rebound hammer, and compressive strength testing." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/procore-logo.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PROCORE Engineering+ by Centris",
          description:
            "Concrete coring, rebar/ferro scanning, rebound hammer test, and compressive strength testing services.",
          telephone: "+63-917-155-7091",
          email: "procore@centris-ph.com",
          areaServed: "PH",
          serviceType: [
            "Concrete Coring",
            "Rebar / Ferro Scanning",
            "Rebound Hammer Test",
            "Concrete Compressive Strength Test",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
