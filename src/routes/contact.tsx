import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SectionHeading, SectionLabel } from "@/components/Section";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings | PROCORE Engineering+" },
      { name: "description", content: "Book PROCORE Engineering+ for concrete coring, rebar scanning, rebound hammer, and compressive strength testing. Call 0917 155 7091 or email procore@centris-ph.com." },
      { property: "og:title", content: "Contact | PROCORE Engineering+" },
      { property: "og:description", content: "Send a material testing or as-built request. We respond within one business day." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // NOTE: form is wired for future emailJS integration.
    // For now, just simulate a successful submission client-side.
    setStatus("sent");
  };

  return (
    <>
      <section className="relative border-b border-line/60 py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <div className="mono-label text-accent">[ § 06 ] Contact</div>
          <h1 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-7xl">
            Send a <span className="text-accent">material testing</span> request.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            One form to book any PROCORE service. We reply within one business
            day. For urgent scheduling, call directly.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-12 md:px-8">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="corner-frame relative border border-line/60 bg-surface/40 p-6 md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="mono-label text-accent">CHANNEL · REQUEST FORM</div>
                <div className="mono-label opacity-70">READY</div>
              </div>

              {status === "sent" ? (
                <div className="border border-accent/60 bg-accent/10 p-6">
                  <div className="mono-label text-accent">TRANSMISSION OK</div>
                  <h3 className="mt-2 font-display text-2xl uppercase">Request received.</h3>
                  <p className="mt-2 text-sm text-foreground/90">
                    Thanks — we'll reach out within one business day. For urgent
                    scheduling, call{" "}
                    <a href="tel:+639171557091" className="text-accent underline">
                      0917 155 7091
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />

                  <div className="md:col-span-2">
                    <label className="mono-label mb-2 block">Service required</label>
                    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                      {services.map((s) => (
                        <label
                          key={s.slug}
                          className="flex cursor-pointer items-center gap-2 border border-line/60 bg-background/40 p-3 text-sm hover:border-accent/60"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={s.slug}
                            className="peer sr-only"
                          />
                          <span className="grid h-4 w-4 place-items-center border border-line-strong peer-checked:border-accent peer-checked:bg-accent peer-checked:text-background">
                            <span className="peer-checked:opacity-100 text-[10px] leading-none">✓</span>
                          </span>
                          <span>{s.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Field label="Project location" name="location" className="md:col-span-2" />

                  <div className="md:col-span-2">
                    <label className="mono-label mb-2 block">Project details</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-line/60 bg-background/60 px-4 py-3 text-foreground outline-none focus:border-accent"
                      placeholder="Structure type, target dates, number of holes/tests, any drawings available…"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="text-xs text-muted-foreground">
                      By sending, you agree to be contacted about your request.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-3 border border-accent bg-accent px-6 py-3 font-semibold text-background hover:bg-accent-2"
                    >
                      <span className="mono-label">TX</span>
                      <span>Send request</span>
                      <span aria-hidden>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Direct channels */}
          <aside className="md:col-span-5">
            <div className="border border-line/60 bg-surface/40 p-6">
              <div className="mono-label text-accent">DIRECT LINES</div>
              <ul className="mt-4 space-y-4">
                <li>
                  <div className="mono-label opacity-70">CALL</div>
                  <a href="tel:+639171557091" className="mt-1 block font-display text-2xl uppercase tracking-tight hover:text-accent">
                    0917 155 7091
                  </a>
                </li>
                <li>
                  <div className="mono-label opacity-70">EMAIL</div>
                  <a href="mailto:procore@centris-ph.com" className="mt-1 block break-all font-display text-xl uppercase tracking-tight hover:text-accent md:text-2xl">
                    procore@centris-ph.com
                  </a>
                </li>
                <li>
                  <div className="mono-label opacity-70">AREA</div>
                  <div className="mt-1 font-display text-xl uppercase">Philippines · nationwide</div>
                </li>
              </ul>
            </div>

            <div className="mt-6 border border-accent/40 bg-accent/5 p-6">
              <div className="mono-label text-accent">RESPONSE TIME</div>
              <p className="mt-2 text-sm text-foreground/90">
                We respond to booking requests within one business day. For
                same-week scheduling, call the direct line above.
              </p>
            </div>

            <div className="mt-6 corner-frame relative border border-line/60 bg-surface/40 p-6">
              <div className="mono-label text-accent">EVERY JOB SHIPS WITH</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>› Certificate of Calibration</li>
                <li>› 3D imagery</li>
                <li>› Signed &amp; sealed structural report</li>
                <li>› Structural engineer supervision</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mono-label mb-2 block">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line/60 bg-background/60 px-4 py-3 text-foreground outline-none focus:border-accent"
      />
    </div>
  );
}
