import type { ReactNode } from "react";

interface ServiceAdvantagesProps {
  advantages: string[];
  title?: string;
  variant?: "list" | "grid" | "cards";
  /** Optional image shown next to the list (only used by the "list" variant). */
  image?: {
    src: string;
    alt: string;
  };
}

/**
 * Lets you bold specific keywords inside an advantage string by wrapping
 * them in **double asterisks**, e.g.
 *   "Highly **fire-resistant** (gypsum releases water as steam when heated)"
 * so the important phrase stands out without hardcoding markup in every string.
 */
function renderWithEmphasis(text: string, emphasisClassName: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={emphasisClassName}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ServiceAdvantages({
  advantages,
  title = "Key Advantages",
  variant = "list",
  image,
}: ServiceAdvantagesProps) {
  if (variant === "grid") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-500">{title}</p>
          <h2 className="mt-4 max-w-lg font-display text-3xl text-navy-900 sm:text-4xl">
            Built to perform.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-ivory-100 p-6 lg:p-8">
                <p className="text-[15px] leading-relaxed text-navy-900/80">
                  {renderWithEmphasis(adv, "font-semibold text-navy-900")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <div>
              <p className="text-sm text-brass-400">{title}</p>
              <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
                Why this approach works.
              </h2>
            </div>
            <ul className="divide-y divide-ivory-100/10 border-t border-ivory-100/10">
              {advantages.map((adv, i) => (
                <li key={i} className="py-4">
                  <p className="text-[15px] leading-relaxed text-ivory-100/70">
                    {renderWithEmphasis(adv, "font-semibold text-brass-300")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  // "list" — default, now rendered as a 3D card grid
  return (
    <section className="relative overflow-hidden border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-24">
      {/* soft ambient glow behind the cards for extra depth */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-brass-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-navy-900/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={
            image
              ? "grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16"
              : ""
          }
        >
          {image && (
            <div
              className="group relative h-64 [perspective:1200px] lg:h-auto lg:min-h-[520px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_20px_50px_-15px_rgba(11,20,38,0.35)] transition-transform duration-500 ease-out [transform:rotateY(0deg)] group-hover:[transform:rotateY(-4deg)_rotateX(2deg)_scale(1.02)]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          )}

          <div>
            <p className="text-sm text-brass-500">{title}</p>
            <h2 className="mt-4 max-w-md font-display text-3xl text-navy-900 sm:text-4xl">
              What makes it better.
            </h2>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {advantages.map((adv, i) => (
                <li
                  key={i}
                  className="group relative [perspective:1000px]"
                >
                  <div
                    className="relative flex h-full gap-4 rounded-xl border border-navy-900/10 bg-white/70 p-5 shadow-[0_1px_2px_rgba(11,20,38,0.06),0_12px_24px_-12px_rgba(11,20,38,0.12)] backdrop-blur-sm transition-all duration-300 ease-out
                    group-hover:-translate-y-1.5 group-hover:border-brass-500/30 group-hover:shadow-[0_2px_4px_rgba(11,20,38,0.08),0_24px_40px_-16px_rgba(11,20,38,0.25)]
                    [transform:rotateX(0deg)] group-hover:[transform:rotateX(3deg)_rotateY(-2deg)]"
                  >
                    <span
                      className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brass-400 to-brass-600 text-sm font-semibold text-navy-950 shadow-[0_4px_10px_-2px_rgba(180,131,58,0.5)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] leading-relaxed text-navy-900/80">
                      {renderWithEmphasis(adv, "font-semibold text-navy-900")}
                    </p>

                    {/* subtle bottom highlight for extra "lifted card" feel */}
                    <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-brass-500/0 to-transparent transition-all duration-300 group-hover:via-brass-500/40" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}