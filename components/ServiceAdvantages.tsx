interface ServiceAdvantagesProps {
  advantages: string[];
  title?: string;
  variant?: "list" | "grid" | "cards";
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Splits "Rapid installation reduces project timeline" into
// bolded lead phrase + rest, for visual emphasis
function splitLead(text: string) {
  const parts = text.split(/[—,]/);
  const lead = parts[0].trim();
  const rest = text.slice(lead.length).trim();
  return { lead, rest };
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
            Why it&rsquo;s worth choosing.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {advantages.map((adv) => {
              const { lead, rest } = splitLead(adv);
              return (
                <div
                  key={adv}
                  className="group border border-navy-900/10 bg-white p-6 transition-colors hover:border-brass-500"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-brass-500 transition-transform group-hover:scale-110">
                      <CheckIcon />
                    </div>
                    <p className="text-sm leading-relaxed text-navy-900">
                      <span className="font-semibold text-navy-900">{lead}</span>
                      {rest && <span className="text-navy-900/65">{rest}</span>}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "cards") {
    return (
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm tracking-wide text-brass-400">{title}</p>
              <h2 className="mt-4 font-display text-3xl text-ivory-100 sm:text-4xl">
                Why this approach works.
              </h2>
            </div>
            <div className="space-y-5">
              {advantages.slice(0, 4).map((adv) => {
                const { lead, rest } = splitLead(adv);
                return (
                  <div key={adv} className="flex gap-4 border-b border-ivory-100/10 pb-5 last:border-0">
                    <span className="flex-shrink-0 text-brass-400">
                      <CheckIcon />
                    </span>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-ivory-100">{lead}</span>
                      {rest && <span className="text-ivory-100/60">{rest}</span>}
                    </p>
                  </div>
                );
              })}
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
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {advantages.map((adv) => {
            const { lead, rest } = splitLead(adv);
            return (
              <li key={adv} className="flex gap-3">
                <span className="mt-0.5 flex-shrink-0 text-brass-500">
                  <CheckIcon />
                </span>
                <span className="text-sm leading-relaxed">
                  <span className="font-semibold text-navy-900">{lead}</span>
                  {rest && <span className="text-navy-900/65">{rest}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}