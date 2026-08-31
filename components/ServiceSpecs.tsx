import Link from "next/link";

interface ServiceSpecsProps {
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  variant?: "sidebar" | "full" | "compact";
  cta?: { text: string; href: string };
}

export default function ServiceSpecs({
  specs,
  faqs,
  variant = "sidebar",
  cta = { text: "Book a site visit", href: "/#contact" },
}: ServiceSpecsProps) {
  if (variant === "full") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm tracking-wide text-brass-500">Specifications</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            Technical details at a glance.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec) => (
              <div key={spec.label} className="bg-white p-6 border border-navy-900/10">
                <dt className="text-xs font-semibold tracking-wide text-navy-900/45 uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-3 text-lg text-navy-900">
                  {spec.value}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-sm tracking-wide text-brass-500">Questions?</p>
            <h3 className="mt-4 font-display text-2xl text-navy-900">
              Common questions answered.
            </h3>
            <div className="mt-8 divide-y divide-navy-900/10 border-t border-navy-900/10 max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h4 className="font-display text-lg text-navy-900">
                    {f.q}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <dl className="grid gap-8 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs text-navy-900/45 font-semibold uppercase tracking-wide">
                      {spec.label}
                    </dt>
                    <dd className="mt-2 text-sm text-navy-900">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <p className="text-sm tracking-wide text-brass-500">Questions</p>
                <div className="mt-6 space-y-6">
                  {faqs.slice(0, 2).map((f) => (
                    <div key={f.q}>
                      <h4 className="font-display text-lg text-navy-900">
                        {f.q}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-navy-900/60">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-fit border border-navy-900/10 p-6 bg-white">
              <p className="font-display text-lg text-navy-900">
                Ready to get started?
              </p>
              <p className="mt-2 text-sm text-navy-900/60">
                Let's discuss your project and timeline.
              </p>
              <Link
                href={cta.href}
                className="mt-6 block w-full border border-brass-500 px-5 py-3 text-center text-sm font-medium text-brass-500 transition-colors hover:bg-brass-500 hover:text-navy-950"
              >
                {cta.text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
          <div>
            <p className="text-sm tracking-wide text-brass-500">
              At a glance
            </p>
            <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
              Specs and details.
            </h2>

            <dl className="mt-10 flex flex-col gap-6">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-xs text-navy-900/45 font-semibold uppercase tracking-wide">
                    {spec.label}
                  </dt>
                  <dd className="mt-2 text-sm text-navy-900">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-16">
              <p className="text-sm tracking-wide text-brass-500">
                Common questions
              </p>
              <div className="mt-6 divide-y divide-navy-900/10 border-t border-navy-900/10">
                {faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="font-display text-lg text-navy-900">
                      {f.q}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="h-fit border border-navy-900/10 p-7 bg-white">
            <h3 className="font-display text-lg text-navy-900">
              Get a consultation
            </h3>
            <p className="mt-2 text-sm text-navy-900/60">
              Let's discuss your specific needs and timeline.
            </p>
            <Link
              href={cta.href}
              className="mt-6 block w-full border border-brass-500 px-5 py-3 text-center text-sm font-medium text-brass-500 transition-colors hover:bg-brass-500 hover:text-navy-950"
            >
              {cta.text}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
