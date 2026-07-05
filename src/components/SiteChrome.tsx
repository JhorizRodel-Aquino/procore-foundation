import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Brand } from "./Brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Brand className="h-8 md:h-9" />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-sm px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+639171557091"
            className="ml-3 inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
          >
            <span className="mono-label">CALL</span>
            <span>0917 155 7091</span>
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative flex h-10 w-10 items-center justify-center border border-line md:hidden"
        >
          <span className={`absolute h-px w-5 bg-foreground transition-transform ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute h-px w-5 bg-foreground transition-transform ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-line/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line/50 py-4 text-lg font-display uppercase tracking-tight text-foreground last:border-0"
                activeProps={{ className: "text-accent" }}
              >
                <span>{n.label}</span>
                <span className="mono-label opacity-60">0{i + 1}</span>
              </Link>
            ))}
            <a
              href="tel:+639171557091"
              className="mt-3 mb-2 flex items-center justify-center gap-2 border border-accent bg-accent/10 py-3 font-semibold text-accent"
            >
              <span className="mono-label">CALL</span>
              <span>0917 155 7091</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Brand className="h-10" />
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Non-destructive testing, concrete coring, and material testing — signed
              and sealed by licensed structural engineers.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="mono-label">STATUS</span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground">Accepting projects</span>
            </div>
          </div>
          <div>
            <div className="mono-label mb-3">Navigate</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-accent">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mono-label mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+639171557091" className="text-foreground/80 hover:text-accent">
                  +63 917 155 7091
                </a>
              </li>
              <li>
                <a href="mailto:procore@centris-ph.com" className="text-foreground/80 hover:text-accent">
                  procore@centris-ph.com
                </a>
              </li>
              <li className="text-muted-foreground">Philippines</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line/50 pt-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} PROCORE Engineering+ by Centris. All rights reserved.</span>
          <span className="mono-label">LAT 14.5995° N · LON 120.9842° E</span>
        </div>
      </div>
    </footer>
  );
}
