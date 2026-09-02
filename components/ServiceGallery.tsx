interface ServiceGalleryProps {
  gallery: { src: string; alt: string }[];
  variant?: "grid" | "featured" | "masonry";
}

export default function ServiceGallery({
  gallery,
  variant = "grid",
}: ServiceGalleryProps) {
  if (variant === "featured") {
    return (
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-500">Photo gallery</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            See it in action.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden border border-navy-900/10">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-96 w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden border border-navy-900/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "masonry") {
    return (
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-sm text-brass-500">Photo gallery</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            See it in action.
          </h2>
          <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden border border-navy-900/10 transition-opacity hover:opacity-90"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // "grid" — default, now with a 3D tilt / depth treatment
  return (
    <section className="relative overflow-hidden border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brass-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-sm text-brass-500">Photo gallery</p>
        <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
          See it in action.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <div key={i} className="group [perspective:1200px]">
              <div
                className="relative h-64 w-full overflow-hidden rounded-xl shadow-[0_10px_25px_-10px_rgba(11,20,38,0.25)] transition-all duration-500 ease-out
                [transform:rotateX(0deg)_rotateY(0deg)_scale(1)]
                group-hover:-translate-y-1
                group-hover:[transform:rotateX(4deg)_rotateY(-6deg)_scale(1.03)]
                group-hover:shadow-[0_30px_45px_-15px_rgba(11,20,38,0.4)]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* glass-like sheen sweep on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* bottom gradient for depth + caption legibility */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-navy-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />

                <p className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-3 text-sm font-medium text-ivory-100 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}