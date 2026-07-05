import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-coring.jpg";
import { services } from "@/data/services";
import { SectionHeading, SectionLabel } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROCORE Engineering+ | Non-Destructive Testing & Concrete Coring" },
      { name: "description", content: "Structural certainty, signed and sealed. Concrete coring, rebar scanning, rebound hammer, and compressive strength testing in the Philippines." },
      { property: "og:title", content: "PROCORE Engineering+ | Non-Destructive Testing & Concrete Coring" },
      { property: "og:description", content: "Structural certainty, signed and sealed. Certified material testing and as-built services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-line/50">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 md:grid-cols-12 md:gap-8 md:px-8 md:pt-16 md:pb-24">
          {/* left: type stack */}
          <div className="relative md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="mono-label text-accent">PC · 01</span>
              <span className="h-px w-12 bg-accent/70" />
              <span className="mono-label opacity-70">Structural Diagnostics</span>
            </div>

            <h1 className="mt-6 font-display text-[13vw] leading-[0.86] uppercase tracking-tight md:text-[6.5rem] lg:text-[8rem]">
              Structural
              <br />
              certainty,
              <br />
              <span className="text-scan">signed &</span>
              <br />
              <span className="text-scan">sealed.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              PROCORE Engineering+ delivers non-destructive scanning, precision
              coring, and certified material testing — supervised end-to-end by
              licensed structural engineers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 border border-accent bg-accent/10 px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent hover:text-background"
              >
                <span className="mono-label">REQ</span>
                <span>Request an assessment</span>
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-line px-5 py-3 font-semibold text-foreground hover:border-accent/60"
              >
                View services
              </Link>
            </div>

            {/* data strip */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line/60 pt-6 md:max-w-lg">
              {[
                { k: "SIGNED", v: "PRC" },
                { k: "CALIB.", v: "CERT" },
                { k: "SCOPE", v: "PH" },
              ].map((it) => (
                <div key={it.k}>
                  <dt className="mono-label">{it.k}</dt>
                  <dd className="mt-1 font-display text-xl uppercase text-foreground">{it.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* right: scanning viewport */}
          <div className="relative md:col-span-5">
            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <span className="mono-label text-accent">SCAN · LIVE</span>
                <span className="mono-label flex items-center gap-2">
                  <span className="h-2 w-2 animate-blink rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
                  ACTIVE
                </span>
              </div>
              <div className="corner-frame relative aspect-[4/5] w-full overflow-hidden border border-line/60 ring-scan">
                <img
                  src={hero}
                  alt="Concrete coring rig operating on-site at night"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1600}
                  height={1200}
                />
                <div className="absolute inset-0 grid-bg-sm opacity-30 mix-blend-screen" aria-hidden />
                <div className="animate-scan-sweep absolute inset-0" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-[10px] font-mono uppercase tracking-widest text-accent-2">
                  <span>SPEC · CORE-Ø 100MM</span>
                  <span>DEPTH · 240MM</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="mono-label opacity-70">FERRO · CLEAR</span>
                <span className="mono-label opacity-70">Ø 100 · WET</span>
              </div>
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="relative border-y border-line/50 bg-surface/60">
          <div className="flex gap-10 overflow-hidden whitespace-nowrap py-3 mono-label text-accent">
            <div className="flex shrink-0 animate-[marquee_40s_linear_infinite] gap-10 px-6">
              {[
                "CONCRETE CORING",
                "REBAR / FERRO SCANNING",
                "REBOUND HAMMER TEST",
                "COMPRESSIVE STRENGTH",
                "AS-BUILT DOCUMENTATION",
                "STRUCTURAL CERTIFICATION",
                "SIGNED & SEALED",
              ]
                .concat([
                  "CONCRETE CORING",
                  "REBAR / FERRO SCANNING",
                  "REBOUND HAMMER TEST",
                  "COMPRESSIVE STRENGTH",
                ])
                .map((t, i) => (
                  <span key={i} className="flex items-center gap-10">
                    <span>{t}</span>
                    <span className="opacity-40">◆</span>
                  </span>
                ))}
            </div>
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionLabel code="PC · 02">Capabilities</SectionLabel>
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
            <SectionHeading title={<>Four disciplines.<br />One signature.</>}>
              Every deliverable is signed and sealed by a licensed structural
              engineer — with calibration certificates, 3D imagery, and
              structural certification included.
            </SectionHeading>
            <div className="hidden md:col-span-4 md:col-start-9 md:block">
              <div className="mono-label opacity-70">Deliverables</div>
              <ul className="mt-2 space-y-1 text-sm text-foreground/80">
                <li>› Certificate of Calibration</li>
                <li>› 3D imagery</li>
                <li>› Signed &amp; sealed report</li>
                <li>› Engineer on-site supervision</li>
              </ul>
            </div>
          </div>

          <ul className="mt-10 divide-y divide-line/60 border-y border-line/60">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group grid grid-cols-12 items-center gap-4 py-6 transition-colors hover:bg-surface/60 md:py-8"
                >
                  <span className="col-span-2 mono-label text-accent md:col-span-1">
                    0{i + 1}
                  </span>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="font-display text-2xl uppercase leading-none tracking-tight text-foreground transition-colors group-hover:text-accent md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                      {s.short}
                    </p>
                  </div>
                  <div className="col-span-8 hidden text-sm text-foreground/70 md:col-span-4 md:block">
                    <span className="mono-label opacity-70">STANDARD · </span>
                    {s.standard}
                  </div>
                  <span className="col-span-2 justify-self-end text-2xl text-accent md:col-span-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ WARNING BAND ============ */}
      <section className="relative overflow-hidden border-y border-accent/40 bg-surface/60 py-16 md:py-20">
        <div className="absolute inset-0 grid-bg-sm opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mono-label text-accent">! ADVISORY</div>
          <div className="mt-4 grid gap-8 md:grid-cols-12 md:items-start">
            <h2 className="font-display text-4xl uppercase leading-[0.92] tracking-tight md:col-span-8 md:text-6xl">
              Avoid costly damage.
              <br />
              <span className="text-scan">Detect what's inside</span>
              <br />
              your concrete before you drill.
            </h2>
            <p className="text-muted-foreground md:col-span-4 md:pt-2">
              Cut rebar and severed post-tension cables are catastrophic and
              preventable. Every coring job we take starts with a
              non-destructive scan — because a signed report beats an incident
              report.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionLabel code="PC · 03">Field protocol</SectionLabel>
          <SectionHeading title={<>How a PROCORE job runs.</>}>
            A tight four-step protocol from site briefing to sealed
            documentation — supervised by a structural engineer.
          </SectionHeading>

          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { k: "SCOPE", t: "Site briefing", d: "Walkthrough, drawings review, scope alignment." },
              { k: "SCAN", t: "Ferro scanning", d: "Locate rebar, cover, post-tension before touching concrete." },
              { k: "EXEC", t: "Test / core", d: "Precision execution with dust and slurry control." },
              { k: "SEAL", t: "Signed report", d: "Structural certification with calibration certificate." },
            ].map((step, i) => (
              <li key={step.k} className="corner-frame relative border border-line/60 bg-surface/40 p-5">
                <div className="flex items-baseline justify-between">
                  <span className="mono-label text-accent">STEP · 0{i + 1}</span>
                  <span className="mono-label opacity-60">{step.k}</span>
                </div>
                <h3 className="mt-4 font-display text-xl uppercase tracking-tight">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative border-t border-line/60 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden border border-accent/40 bg-gradient-to-br from-surface via-surface-2 to-background p-8 md:p-14">
            <div className="absolute inset-0 grid-bg-sm opacity-25" aria-hidden />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mono-label text-accent">TRANSMIT · REQUEST</div>
                <h2 className="mt-3 font-display text-4xl uppercase leading-[0.9] tracking-tight md:text-6xl">
                  Ready to send a
                  <br />
                  <span className="text-scan">material testing</span>
                  <br />
                  request?
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-accent bg-accent px-6 py-4 font-semibold text-background hover:bg-accent-2"
                >
                  <span className="mono-label">GO</span>
                  <span>Book PROCORE</span>
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href="tel:+639171557091"
                  className="mono-label text-center text-accent hover:text-accent-2"
                >
                  or CALL · 0917 155 7091
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
