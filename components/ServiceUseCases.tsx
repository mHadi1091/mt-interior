import type { ReactNode } from "react";

interface ServiceUseCasesProps {
  bestFor: string[];
  variant?: "pills" | "list" | "columns";
}

/**
 * Lets you bold specific keywords inside a use-case string by wrapping
 * them in **double asterisks**, e.g. "**Rental properties** and short lets"
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

export default function ServiceUseCases({
  bestFor,
  variant = "pills",
}: ServiceUseCasesProps) {
  if (variant === "columns") {
    return (
      <section className="border-t border-navy-900/10 bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-400">Applications</p>
          <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
            Where it fits perfectly.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bestFor.map((use, i) => (
              <div key={i} className="border-l-2 border-brass-500 pl-5">
                <p className="text-sm text-ivory-100/80">
                  {renderWithEmphasis(use, "font-semibold text-ivory-100")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "list") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-500">Best for</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            Perfect for these situations.
          </h2>
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {bestFor.map((use, i) => (
              <li key={i} className="flex gap-3 text-sm text-navy-900/80">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass-500" />
                <span>{renderWithEmphasis(use, "font-semibold text-navy-900")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // "pills" — default
  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm text-brass-500">Best for</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {bestFor.map((use, i) => (
            <span
              key={i}
              className="rounded-full border border-navy-900/20 bg-white px-4 py-2 text-sm text-navy-900 transition-colors hover:border-brass-500 hover:bg-brass-300/10"
            >
              {use}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}