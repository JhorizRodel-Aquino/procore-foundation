import type { ReactNode } from "react";

export function SectionLabel({ code, children }: { code: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="mono-label">{code}</span>
      <span className="h-px flex-1 bg-line-strong/60" />
      <span className="mono-label opacity-70">{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && <div className="mono-label mb-4">{eyebrow}</div>}
      <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base text-muted-foreground md:text-lg">{children}</p>}
    </div>
  );
}
