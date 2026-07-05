import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading, SectionLabel } from "@/components/Section";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Field Work | PROCORE Engineering+" },
      { name: "description", content: "PROCORE Engineering+ project site photos: concrete coring, ferro scanning, and structural investigations in the field." },
      { property: "og:title", content: "Gallery | PROCORE Engineering+" },
      { property: "og:description", content: "Field work: coring rigs, ferro scans, and engineer-supervised site investigations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const shots = [
  { src: g1, code: "SITE-014", caption: "Night coring operation · slab-on-grade", span: "md:col-span-8 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { src: g5, code: "MACRO-021", caption: "Diamond bit engagement · wet cut", span: "md:col-span-4 aspect-square" },
  { src: g6, code: "FERRO-007", caption: "Rebar mapping · in-situ display", span: "md:col-span-4 aspect-square" },
  { src: g3, code: "AS-BLT-033", caption: "Multi-hole coring layout · top-down", span: "md:col-span-6 aspect-[4/3]" },
  { src: g2, code: "SUPR-002", caption: "Structural engineer supervision", span: "md:col-span-6 aspect-[4/3]" },
  { src: g4, code: "BRIEF-018", caption: "Field briefing · pre-scan alignment", span: "md:col-span-12 aspect-[16/9]" },
];

function Gallery() {
  return (
    <>
      <section className="relative border-b border-line/60 py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mono-label text-accent">[ § 04 ] Field log</div>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            From the field.<br /><span className="text-accent">Not the stock library.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            A running log of PROCORE Engineering+ site work — coring, scanning,
            and structural investigations.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {shots.map((s, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden border border-line/60 ${s.span}`}
              >
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                  <span className="mono-label text-accent">{s.code}</span>
                  <span className="mono-label opacity-70">
                    {String(i + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-3">
                  <span className="h-1.5 w-1.5 animate-blink bg-accent shadow-[0_0_8px_var(--accent)]" />
                  <span className="text-sm text-foreground/90">{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
