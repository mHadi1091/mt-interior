const steps = [
  {
    n: "01",
    title: "Site visit",
    desc: "We measure your space and talk through how you actually use each room.",
  },
  {
    n: "02",
    title: "Design &amp; quote",
    desc: "A layout, material list and fixed quote — gypsum, glass, aluminum or cement.",
  },
  {
    n: "03",
    title: "Fabrication",
    desc: "Frames and panels are cut and finished before anything reaches your site.",
  },
  {
    n: "04",
    title: "Install &amp; handover",
    desc: "Our own crew fits the work, cleans up, and walks you through the result.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-ivory-100/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-lg">
            <p className="text-sm tracking-wide text-brass-400">
              From concept to creation
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-100 sm:text-5xl">
              How a project moves through our workshop.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ivory-100/55">
            Four stages, one point of contact throughout — you&rsquo;re never
            passed between separate contractors.
          </p>
        </div>

        <ol className="mt-4 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-brass-500/30 pt-6">
              <span className="font-display text-lg text-brass-400">
                {step.n}
              </span>
              <h3
                className="mt-3 font-display text-2xl text-ivory-100"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
              <p className="mt-2 text-sm leading-relaxed text-ivory-100/55">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
