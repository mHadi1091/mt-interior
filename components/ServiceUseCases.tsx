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
      <section className="border-t border-navy-900/10 bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm tracking-wide text-brass-400">Applications</p>
          <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
            Where it fits perfectly.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bestFor.map((use) => (
              <div key={use} className="border-l-2 border-brass-500 pl-5">
                <p className="text-sm text-ivory-100/80">{use}</p>
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
          <p className="text-sm tracking-wide text-brass-500">Best For</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            Perfect for these situations.
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {bestFor.map((use) => (
              <li key={use} className="flex gap-3 text-sm text-navy-900">
                <span className="flex-shrink-0 font-display text-brass-500">
                  →
                </span>
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm tracking-wide text-brass-500">Best For</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {bestFor.map((use) => (
            <span
              key={use}
              className="border border-navy-900/20 rounded-full px-4 py-2 text-sm text-navy-900 bg-white hover:bg-brass-300/10 hover:border-brass-500 transition-colors"
            >
              {use}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
