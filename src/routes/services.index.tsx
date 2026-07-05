import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { SectionHeading, SectionLabel } from "@/components/Section";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Coring, Scanning, Testing | PROCORE Engineering+" },
      { name: "description", content: "Concrete coring, rebar/ferro scanning, rebound hammer, and compressive strength testing — signed and sealed by structural engineers." },
      { property: "og:title", content: "Services | PROCORE Engineering+" },
      { property: "og:description", content: "Four disciplines. One signature. Certified structural testing services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="relative border-b border-line/60 py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mono-label text-accent">[ § 02 ] Capabilities</div>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            Certified testing,<br /><span className="text-accent">end-to-end.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            Non-destructive investigation, precision coring, and lab-verified
            strength — all delivered with structural certification.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group corner-frame relative overflow-hidden border border-line/60 bg-surface/40 transition-colors hover:border-accent/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                    <span className="mono-label text-accent">{s.code}</span>
                    <span className="mono-label opacity-70">0{i + 1} / 04</span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-2xl uppercase tracking-tight md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="mono-label opacity-70">STANDARD · {s.standard}</span>
                    <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
