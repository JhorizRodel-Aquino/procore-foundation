import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services, getService, type Service } from "@/data/services";
import { SectionLabel } from "@/components/Section";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | PROCORE Engineering+" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData;
    return {
      meta: [
        { title: `${s.title} | PROCORE Engineering+` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.title} | PROCORE Engineering+` },
        { property: "og:description", content: s.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="mono-label text-accent">SIGNAL LOST</div>
      <h1 className="mt-3 font-display text-5xl uppercase">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-accent underline">
        Back to all services
      </Link>
    </section>
  );
}

function ServiceDetail() {
  const s = Route.useLoaderData() as Service;
  const otherServices = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60">
        <div className="absolute inset-0" aria-hidden>
          <img src={s.image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="absolute inset-0 grid-bg opacity-30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-24">
          <div className="mono-label mb-4 text-accent">
            {s.code} · {s.standard}
          </div>
          <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-8xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{s.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-accent bg-accent px-5 py-3 font-semibold text-background hover:bg-accent-2"
            >
              <span className="mono-label">REQ</span>
              <span>Request this service</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 font-semibold hover:border-accent/60"
            >
              ← All services
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <SectionLabel code="OVERVIEW">Scope</SectionLabel>
            <p className="mt-4 text-lg text-foreground/90">{s.description}</p>

            <div className="mt-10">
              <SectionLabel code="METHOD">Test method</SectionLabel>
              <p className="mt-4 text-foreground/90">{s.method}</p>
            </div>

            <div className="mt-10">
              <SectionLabel code="PROCESS">Field protocol</SectionLabel>
              <ol className="mt-6 space-y-4">
                {s.process.map((p, i) => (
                  <li
                    key={p.step}
                    className="corner-frame relative flex gap-4 border border-line/60 bg-surface/40 p-5"
                  >
                    <span className="font-display text-3xl leading-none text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-display text-lg uppercase tracking-tight">
                        {p.step}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="corner-frame relative border border-line/60 bg-surface/40 p-6">
              <div className="mono-label text-accent">DELIVERABLES</div>
              <ul className="mt-4 space-y-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-accent shadow-[0_0_8px_var(--accent)]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 corner-frame relative border border-line/60 bg-surface/40 p-6">
              <div className="mono-label text-accent">APPLICATIONS</div>
              <ul className="mt-4 space-y-3">
                {s.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm">
                    <span className="mono-label opacity-70">›</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border border-accent/50 bg-accent/5 p-6">
              <div className="mono-label text-accent">SIGNED &amp; SEALED</div>
              <p className="mt-2 text-sm text-foreground/90">
                All reports for {s.title.toLowerCase()} are supervised, signed, and
                sealed by a licensed structural engineer, with a calibration
                certificate attached.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-line/60 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionLabel code="RELATED">Other capabilities</SectionLabel>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {otherServices.map((o) => (
              <li key={o.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group flex items-center justify-between border border-line/60 bg-surface/40 p-5 hover:border-accent/60"
                >
                  <div>
                    <div className="mono-label text-accent">{o.code}</div>
                    <div className="mt-1 font-display uppercase tracking-tight">
                      {o.title}
                    </div>
                  </div>
                  <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
