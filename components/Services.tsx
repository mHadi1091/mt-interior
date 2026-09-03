import Link from "next/link";
import { services as serviceData } from "@/lib/services";

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 26 26",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const icons: Record<string, React.ReactNode> = {
  "gypsum-board-partition": (
    <svg {...iconProps}>
      <rect x="4" y="4" width="7" height="18" />
      <rect x="15" y="4" width="7" height="18" />
      <path d="M11 13h4" />
    </svg>
  ),
  "aluminum-glass-partition": (
    <svg {...iconProps}>
      <rect x="3" y="3" width="20" height="20" rx="0.5" />
      <path d="M13 3v20M3 13h20" />
    </svg>
  ),
  "drywall-systems": (
    <svg {...iconProps}>
      <rect x="4" y="5" width="18" height="16" />
      <path d="M4 10h18M4 15h18" />
    </svg>
  ),
  "dumpa-false-ceiling": (
    <svg {...iconProps}>
      <path d="M3 8l10-5 10 5-10 5-10-5z" />
      <path d="M3 8v10l10 5 10-5V8" />
    </svg>
  ),
  "interior-work": (
    <svg {...iconProps}>
      <path d="M4 21V9l9-6 9 6v12" />
      <path d="M9 21v-8h8v8" />
    </svg>
  ),
  "cement-partition": (
    <svg {...iconProps}>
      <rect x="3" y="4" width="8" height="8" />
      <rect x="15" y="4" width="8" height="8" />
      <rect x="3" y="14" width="8" height="8" />
      <rect x="15" y="14" width="8" height="8" />
    </svg>
  ),
  "gypsum-ceiling": (
    <svg {...iconProps}>
      <path d="M3 6h20" />
      <path d="M3 6v3a10 5 0 0 0 20 0V6" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-sm tracking-wide text-brass-500">Our services</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
            Every system your space needs, under one crew.
          </h2>
          <p className="mt-5 text-navy-900/60">
            We fabricate and fit each partition, ceiling and finish
            in-house — no subcontracting between trades, no gaps in
            accountability.
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-navy-900/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
                <img
                  src={s.gallery[0]?.src ?? s.heroImage}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center border border-ivory-100/40 bg-navy-950/80 text-brass-300 backdrop-blur-sm transition-colors group-hover:border-brass-300">
                  {icons[s.slug]}
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl text-navy-900 transition-colors group-hover:text-brass-500">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/55">
                {s.shortDesc}
              </p>
              <span className="mt-3 inline-block text-sm text-brass-500 underline decoration-brass-500/40 underline-offset-4">
                View details
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
