const shots = [
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    alt: "Aluminum framed glass partition wall in a modern office",
    caption: "Aluminum &amp; glass office partition — Johar Town",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Living room with recessed gypsum ceiling and cove lighting",
    caption: "Gypsum ceiling with cove lighting — private residence",
  },
  {
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
    alt: "Hallway with warm lighting and stone flooring",
    caption: "Full interior fit-out — Chandrawan Road",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-ivory-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-lg">
            <p className="text-sm tracking-wide text-brass-500">
              Recent work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
              A few rooms we&rsquo;ve finished.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <figure
              key={shot.caption}
              className={`relative overflow-hidden ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-[1.03] lg:h-96"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/80 to-transparent px-5 py-4 text-sm text-ivory-100"
                dangerouslySetInnerHTML={{ __html: shot.caption }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
