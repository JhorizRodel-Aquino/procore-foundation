import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, SectionLabel } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PROCORE Engineering+ by Centris" },
      { name: "description", content: "PROCORE Engineering+ is the material testing and structural diagnostics division of Centris — signed and sealed by licensed structural engineers." },
      { property: "og:title", content: "About | PROCORE Engineering+" },
      { property: "og:description", content: "Structural diagnostics and material testing, powered by Centris." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative border-b border-line/60 py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mono-label text-accent">[ § 05 ] About</div>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            Engineering-grade certainty. <br /><span className="text-accent">By Centris.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            PROCORE Engineering+ is the structural diagnostics and material
            testing arm of Centris — built for contractors, developers, and
            engineers who need results that hold up under a stamp.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <SectionLabel code="MISSION">What we do</SectionLabel>
            <p className="mt-4 text-lg text-foreground/90">
              We combine non-destructive scanning, precision coring, and lab-verified
              testing under a single, engineer-supervised workflow. From the first
              ferro scan to the final sealed report, one team is accountable for
              the numbers you sign off on.
            </p>
            <p className="mt-4 text-foreground/80">
              Every project we take is treated as if a structural failure is one
              undetected rebar away — because it is. That's why every coring job
              starts with a scan, and every report ends with a stamp.
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="corner-frame relative border border-line/60 bg-surface/40 p-6">
              <div className="mono-label text-accent">STANDARDS</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>› ASTM C39 — Compressive Strength</li>
                <li>› ASTM C42 — Coring &amp; Cutting</li>
                <li>› ASTM C805 — Rebound Hammer</li>
                <li>› BS 1881-204 — Cover / Ferro Scanning</li>
                <li>› ACI 228.2R — NDT of Concrete</li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
          <SectionLabel code="COMMITMENT">What every job ships with</SectionLabel>
          <ul className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              { k: "01", t: "Certificate of Calibration", d: "Traceable to standards, attached to every report." },
              { k: "02", t: "3D Imagery", d: "Visual documentation of scans, cores, and results." },
              { k: "03", t: "Structural Certification", d: "Signed and sealed by a licensed structural engineer." },
              { k: "04", t: "Engineer Supervision", d: "A structural engineer runs the site — not just signs the paperwork." },
            ].map((c) => (
              <li key={c.k} className="corner-frame relative border border-line/60 bg-surface/40 p-5">
                <div className="mono-label text-accent">STD · {c.k}</div>
                <h3 className="mt-3 font-display text-lg uppercase tracking-tight">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
