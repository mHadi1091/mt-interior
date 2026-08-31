interface ServiceAdvantagesProps {
  advantages: string[];
  title?: string;
  variant?: "list" | "grid" | "cards";
}

export default function ServiceAdvantages({
  advantages,
  title = "Key Advantages",
  variant = "list",
}: ServiceAdvantagesProps) {
  if (variant === "grid") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm tracking-wide text-brass-500">{title}</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            Why {title.toLowerCase()}.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {advantages.map((adv) => (
              <div key={adv} className="border border-navy-900/10 p-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-brass-500">✓</div>
                  <p className="text-sm leading-relaxed text-navy-900">
                    {adv}
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
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm tracking-wide text-brass-400">
                {title}
              </p>
              <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
                Why this approach works.
              </h2>
            </div>
            <div className="space-y-4">
              {advantages.slice(0, 4).map((adv) => (
                <div key={adv} className="flex gap-3">
                  <span className="flex-shrink-0 text-brass-400">→</span>
                  <p className="text-sm leading-relaxed text-ivory-100/70">
                    {adv}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm tracking-wide text-brass-500">{title}</p>
        <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
          What makes it better.
        </h2>
        <ul className="mt-10 space-y-4">
          {advantages.map((adv) => (
            <li key={adv} className="flex gap-3 text-sm text-navy-900">
              <span className="flex-shrink-0 text-brass-500">•</span>
              <span>{adv}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
