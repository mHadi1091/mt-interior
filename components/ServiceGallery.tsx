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
          <p className="text-sm tracking-wide text-brass-500">Photo Gallery</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            See it in action.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-96 w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.slice(1).map((img) => (
                <div key={img.src} className="overflow-hidden">
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
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="break-inside-avoid overflow-hidden hover:opacity-80 transition-opacity"
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

  return (
    <section className="bg-ivory-100 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {gallery.map((img) => (
            <div key={img.src} className="overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
