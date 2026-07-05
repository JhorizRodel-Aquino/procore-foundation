import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-coring.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROCORE Engineering+ | Non-Destructive Testing & Concrete Coring" },
      {
        name: "description",
        content:
          "Structural certainty, signed and sealed. Concrete coring, rebar scanning, rebound hammer, and compressive strength testing in the Philippines.",
      },
      { property: "og:title", content: "PROCORE Engineering+ | Non-Destructive Testing & Concrete Coring" },
      {
        property: "og:description",
        content: "Structural certainty, signed and sealed. Certified material testing and as-built services.",
      },
      { property: "og:image", content: hero },
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
      <section className="relative border-b border-line/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 md:grid-cols-12 md:gap-10 md:px-8 md:pt-20 md:pb-28">
          {/* left: type stack */}
          <div className="relative md:col-span-7 md:pt-6">
            <div className="flex items-center gap-3 text-accent">
              <span className="inline-block h-1.5 w-1.5 bg-accent" />
              <span className="mono-label">Metro Manila / 14°35′N 121°00′E</span>
            </div>

            <h1 className="mt-8 font-display text-5xl leading-[0.95] uppercase tracking-tight sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem]">
              Structural
              <br />
              <span className="text-accent">Certainty</span>
              <br />
              for every core.
            </h1>

            <p className="mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-foreground/80 md:text-2xl">
              Licensed structural engineering and non-destructive material
              testing, backed by 10+ years of field experience across the
              Philippines.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-accent-2"
              >
                Request Assessment
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-line-strong px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground/90 hover:border-accent hover:text-accent"
              >
                <span className="mono-label text-accent">[01]</span>
                View Field Services
              </Link>
            </div>
          </div>

          {/* right: hero photo plate */}
          <div className="relative md:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={hero}
                  alt="PROCORE Engineering+ field team performing concrete coring operations"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={1600}
                  height={2000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" aria-hidden />
                <div className="pointer-events-none absolute inset-3 border border-white/20" aria-hidden />
                <figcaption className="absolute left-5 top-5 mono-label text-white/90">
                  PLATE 01 · FIELD OPERATIONS
                </figcaption>
                <div className="absolute right-5 bottom-5 text-right mono-label text-white/80">
                  <div>STA · PC–014</div>
                  <div>Ø 100MM · DEPTH 240MM</div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ AUTHORITY STRIP ============ */}
      <section className="border-y border-line/60 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-10 md:grid-cols-4 md:px-8 md:py-8">
          {[
            { k: "10+", v: "Years field experience" },
            { k: "PRC", v: "Licensed structural engr." },
            { k: "ASTM", v: "Calibrated instruments" },
            { k: "PH", v: "Nationwide coverage" },
          ].map((it) => (
            <div key={it.k} className="border-l border-line/60 pl-4 first:border-l-0 md:first:border-l">
              <div className="font-display text-2xl uppercase text-foreground md:text-3xl">
                {it.k}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{it.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <div className="mono-label text-accent">[ § 01 ] About PROCORE</div>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
              A decade in the field. Zero tolerance for surprises.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-serif text-xl italic leading-relaxed text-foreground/85 md:text-2xl">
              PROCORE Engineering+ is the material testing and structural
              diagnostics division of Centris.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Our engineers have logged more than ten years on Philippine
              construction sites — mapping rebar before every cut, coring
              through post-tensioned slabs without incident, and shipping
              signed &amp; sealed reports that hold up under review.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              What we sell isn't a scan. It's the certainty that when you
              drill, cut, or certify, the numbers on your report match the
              concrete.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-2"
            >
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="border-t border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mono-label text-accent">[ § 02 ] Register 01–04</div>
              <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
                Core field <br /><span className="text-accent">services.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
                Every test we ship is supervised by a licensed structural
                engineer and comes signed, sealed, and calibrated.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block overflow-hidden border border-line/60 bg-surface/30 transition-colors hover:border-accent/60"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
                    <div className="absolute left-4 top-4 mono-label text-white/85">
                      {String(i + 1).padStart(2, "0")} // {s.code}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground md:text-base">
                        {s.short}
                      </p>
                      <div className="mt-4 mono-label opacity-70">
                        STANDARD · {s.standard}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-2xl text-accent transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ ADVISORY WITH PHOTO ============ */}
      <section className="relative border-t border-line/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-12 md:gap-12 md:px-8">
          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={g1}
                alt="Structural engineer supervising a concrete coring rig on-site"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-3 border border-white/15" aria-hidden />
              <div className="absolute left-5 top-5 mono-label text-white/90">
                PLATE 02 · PRE-CORE SCAN
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-10">
            <div className="mono-label text-accent">[ § 03 ] Advisory</div>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
              Avoid costly damage.
              <br />
              <span className="text-accent">Scan first.</span>
              <br />
              Drill second.
            </h2>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
              Cut rebar and severed post-tension cables are catastrophic — and
              entirely preventable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Every coring job we take starts with a non-destructive ferro
              scan. Because a signed &amp; sealed report always beats an
              incident report.
            </p>
            <Link
              to="/services/rebar-scanning"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-2"
            >
              Rebar &amp; ferro scanning →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="border-t border-line/60 bg-surface/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="mono-label text-accent">[ § 04 ] Field protocol</div>
              <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
                How a PROCORE job runs.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-4">
              <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
                A tight four-step protocol from site briefing to sealed
                documentation — supervised end-to-end by a structural engineer.
              </p>
            </div>
          </div>

          <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-4">
            {[
              { t: "Site briefing", d: "Walkthrough, drawings review, and scope alignment with the structural engineer of record." },
              { t: "Ferro scanning", d: "Non-destructive rebar and post-tension mapping before any concrete is touched." },
              { t: "Precision testing", d: "Coring, rebound, or lab crushing — executed with dust and slurry control." },
              { t: "Signed report", d: "Structural certification delivered with calibration certificate and 3D imagery." },
            ].map((step, i) => (
              <li key={step.t} className="border-t border-line-strong/60 pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl text-accent">
                    0{i + 1}
                  </span>
                  <span className="mono-label opacity-60">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl uppercase tracking-tight md:text-2xl">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ GALLERY PREVIEW ============ */}
      <section className="border-t border-line/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mono-label text-accent">[ § 05 ] From the field</div>
              <h2 className="mt-4 font-display text-3xl uppercase tracking-tight md:text-5xl">
                Real work. Real sites.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-accent-2"
            >
              View field log →
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {[g1, g2, g3].map((src, i) => (
              <figure key={i} className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={src}
                  alt="PROCORE field work"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <figcaption className="absolute left-4 top-4 mono-label text-white/90">
                  PLATE {String(i + 3).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="border-t border-line/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-12 md:px-8">
          <div className="md:col-span-8">
            <div className="mono-label text-accent">[ § 06 ] Book a job</div>
            <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
              Ready when your <br />
              <span className="text-accent">concrete is.</span>
            </h2>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
              Send us the scope. We'll come back with a plan, a schedule, and a
              structural engineer assigned to your site.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 md:col-span-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wider text-background hover:bg-accent-2"
            >
              Book PROCORE →
            </Link>
            <a
              href="tel:+639171557091"
              className="inline-flex items-center justify-center gap-2 border border-line-strong px-6 py-4 text-sm font-semibold uppercase tracking-wider text-foreground/90 hover:border-accent hover:text-accent"
            >
              Call 0917 155 7091
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
