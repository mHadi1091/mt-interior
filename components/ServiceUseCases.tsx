interface ServiceUseCasesProps {
  bestFor: string[];
  variant?: "pills" | "list" | "columns";
}

export default function ServiceUseCases({
  bestFor,
  variant = "pills",
}: ServiceUseCasesProps) {
  if (variant === "columns") {
    return (
      <section className="border-t border-ivory-100/10 bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm tracking-wide text-brass-400">Applications</p>
              <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
                Where it fits perfectly.
              </h2>
            </div>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {bestFor.map((use, index) => (
                <div key={use} className="flex gap-4 border-t border-ivory-100/15 py-5">
                  <span className="font-display text-sm text-brass-400">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed text-ivory-100/80">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "list") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm tracking-wide text-brass-500">Best For</p>
              <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
                Perfect for these situations.
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {bestFor.map((use, index) => (
                <li key={use} className="flex gap-4 border border-navy-900/10 bg-white p-5 text-sm text-navy-900 transition-colors hover:border-brass-500">
                  <span className="flex-shrink-0 font-display text-brass-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm tracking-wide text-brass-500">Best For</p>
            <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
              Made for the moments that matter.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bestFor.map((use, index) => (
              <div key={use} className="flex gap-4 border-b border-navy-900/15 py-4">
                <span className="font-display text-sm text-brass-500">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-navy-900">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
