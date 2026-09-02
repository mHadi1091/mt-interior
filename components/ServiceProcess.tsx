import type { ReactNode } from "react";

interface ServiceProcessProps {
  process: { title: string; desc: string }[];
  variant?: "numbered" | "timeline" | "cards" | "steps";
}

/**
 * Lets you bold specific keywords inside a step description by wrapping
 * them in **double asterisks**, e.g.
 *   "Steel studs are installed vertically, **gypsum boards** are screwed to both faces"
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

export default function ServiceProcess({
  process,
  variant = "numbered",
}: ServiceProcessProps) {
  if (variant === "timeline") {
    return (
      <section className="border-t border-navy-900/10 bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-400">Our process</p>
          <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
            How we work.
          </h2>

          <div className="relative mt-12 space-y-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brass-500 font-display text-lg font-bold text-navy-950">
                    {i + 1}
                  </div>
                  {i < process.length - 1 && (
                    <div className="mt-2 h-16 w-0.5 bg-brass-500/30"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-display text-xl text-ivory-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                    {renderWithEmphasis(step.desc, "font-semibold text-brass-300")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-500">Process</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            How it all comes together.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, i) => (
              <div
                key={step.title}
                className="border border-navy-900/10 bg-white p-8 transition-colors hover:border-brass-500"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center bg-brass-500 font-display font-bold text-navy-950">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                  {renderWithEmphasis(step.desc, "font-semibold text-navy-900")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "steps") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-sm text-brass-500">How it&rsquo;s done</p>
            <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
              The process, step by step.
            </h2>

            <div className="mt-12 space-y-10">
              {process.map((step, i) => (
                <div key={step.title} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-brass-500 font-display text-xl font-bold text-brass-500">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-2xl text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                      {renderWithEmphasis(step.desc, "font-semibold text-navy-900")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // "numbered" — default
  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm text-brass-500">How it&rsquo;s done</p>
        <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
          Our process for this job.
        </h2>

        <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {process.map((step, i) => (
            <li key={step.title} className="border-t border-navy-900/10 pt-5">
              <span className="font-display text-lg text-brass-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/55">
                {renderWithEmphasis(step.desc, "font-semibold text-navy-900")}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}