export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-0"
    >
      {/* faint architectural grid, aluminum-line motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brass-300) 1px, transparent 1px), linear-gradient(90deg, var(--brass-300) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10">
        <div className="hero-rise flex flex-col justify-center">
          <p className="text-sm tracking-wide text-brass-400">
            Lahore · Aluminum, glass &amp; interior fit-out
          </p>

          <h1 className="mt-5 font-display text-[2.75rem] leading-[1.05] text-ivory-100 sm:text-6xl lg:text-[4rem]">
            We design spaces,
            <br />
            <span className="italic text-brass-400">you live better.</span>
          </h1>

          <p className="mt-7 max-w-md text-[1.05rem] leading-relaxed text-ivory-100/70">
            From concept to creation, M.T Interior &amp; Home Services builds
            the aluminum, glass and gypsum systems that turn a bare shell
            into a finished home or office — measured, fabricated and
            installed by our own crew.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="bg-brass-500 px-7 py-3.5 text-sm font-medium tracking-wide text-navy-950 transition-colors hover:bg-brass-400"
            >
              Get a free consultation
            </a>
            <a
              href="#services"
              className="text-sm text-ivory-100/70 underline decoration-brass-500/40 underline-offset-4 transition-colors hover:text-brass-300"
            >
              See what we build
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ivory-100/10 pt-7">
            <div>
              <dt className="font-display text-3xl text-brass-300">7+</dt>
              <dd className="mt-1 text-xs text-ivory-100/50">
                Partition &amp; ceiling systems
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-brass-300">100%</dt>
              <dd className="mt-1 text-xs text-ivory-100/50">
                In-house install crew
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-brass-300">Free</dt>
              <dd className="mt-1 text-xs text-ivory-100/50">
                Site visit &amp; consultation
              </dd>
            </div>
          </dl>
        </div>

        {/* image collage, diagonal seams echoing the brand card */}
        <div className="relative grid h-[420px] grid-cols-2 gap-1.5 lg:h-auto lg:self-stretch">
          <div className="col-span-2 cut-diagonal-r relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80"
              alt="Modern living room with glass and aluminum partition detailing"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/10" />
          </div>
          <div className="cut-diagonal-l relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
              alt="Slim aluminum-framed glass office partition"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80"
              alt="Recessed gypsum ceiling with cove lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
