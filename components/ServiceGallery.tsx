"use client";

import { useState } from "react";

interface ServiceGalleryProps {
  gallery: { src: string; alt: string }[];
  variant?: "grid" | "featured" | "masonry";
}

function GalleryImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`${className} flex items-center justify-center bg-navy-900/5 text-center`}>
        <span className="px-4 text-xs text-navy-900/40">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
    />
  );
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
            <div className="group relative overflow-hidden">
              <GalleryImage
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-4 left-4 text-sm text-ivory-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {gallery[0].alt}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.slice(1).map((img) => (
                <div key={img.src} className="group relative overflow-hidden">
                  <GalleryImage
                    src={img.src}
                    alt={img.alt}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          <p className="text-sm tracking-wide text-brass-500">Photo Gallery</p>
          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            See it in action.
          </h2>
          <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group relative break-inside-avoid overflow-hidden"
              >
                <GalleryImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        <p className="text-sm tracking-wide text-brass-500">Photo Gallery</p>
        <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
          See it in action.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.map((img) => (
            <div key={img.src} className="group relative overflow-hidden">
              <GalleryImage
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}