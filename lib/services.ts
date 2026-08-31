export type ServiceDetail = {
  slug: string;
  name: string;
  shortDesc: string;
  hero: string;
  heroImage: string;
  gallery: { src: string; alt: string }[];
  overview: string;
  process: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "gypsum-board-partition",
    name: "Gypsum board partition",
    shortDesc:
      "Slim, load-light walls that divide a room without the wait of masonry.",
    hero: "Walls that go up in days, not weeks.",
    heroImage:
      "https://images.unsplash.com/photo-1618221639468-c6ee66c69eba?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1618221639468-c6ee66c69eba?w=1000&q=80",
        alt: "Freshly framed and boarded gypsum partition wall",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80",
        alt: "Finished interior wall painted white, ready for handover",
      },
      {
        src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1000&q=80",
        alt: "Bright modern room divided by a slim interior partition",
      },
    ],
    overview:
      "Gypsum board partitions give you a full interior wall — wiring, switches and all — without the mess or cure-time of brick and cement. We frame a galvanized steel channel, board both faces, and finish the joints flush for paint. It's the fastest way to reshape an office layout or divide a large room.",
    process: [
      { title: "Frame", desc: "Steel channel tracks are fixed to floor and ceiling." },
      { title: "Board", desc: "Gypsum boards are screwed to both faces of the frame." },
      { title: "Finish", desc: "Joints are taped, filled and sanded to a paint-ready surface." },
    ],
    specs: [
      { label: "Typical thickness", value: "75–150 mm" },
      { label: "Install time", value: "2–4 days per room" },
      { label: "Sound rating", value: "Good, insulation-fillable" },
      { label: "Best for", value: "Offices, bedrooms, quick reconfigs" },
    ],
    faqs: [
      { q: "Can it hold shelves or a TV?", a: "Yes, with the right anchors or a plywood backer added inside the frame at install time." },
      { q: "Does it need special maintenance?", a: "No — it's finished and painted just like a normal wall." },
    ],
  },
  {
    slug: "aluminum-glass-partition",
    name: "Aluminum & glass partition",
    shortDesc:
      "Slim aluminum frames with clear or frosted glass, for offices and homes alike.",
    hero: "Divide the space without closing it off.",
    heroImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
        alt: "Slim aluminum-framed glass partition in an office corridor",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80",
        alt: "Glass meeting room partition with aluminum frame detailing",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80",
        alt: "Modern office space divided by full-height glass walls",
      },
    ],
    overview:
      "Aluminum-framed glass partitions let light travel through a space while still separating it. We fabricate the frame to size, fit clear, frosted or tinted glass, and install with a clean, narrow sightline. Popular for offices, meeting rooms and modern home entryways.",
    process: [
      { title: "Measure", desc: "Exact opening dimensions are taken on site." },
      { title: "Fabricate", desc: "Aluminum profile is cut and the frame is assembled off-site." },
      { title: "Glaze & fit", desc: "Glass is set into the frame and the unit is installed and sealed." },
    ],
    specs: [
      { label: "Glass options", value: "Clear, frosted, tinted, laminated" },
      { label: "Frame finish", value: "Powder-coated aluminum, any RAL colour" },
      { label: "Install time", value: "1–3 days per opening" },
      { label: "Best for", value: "Offices, meeting rooms, entryways" },
    ],
    faqs: [
      { q: "Is the glass safe if it breaks?", a: "We use tempered or laminated glass, which is standard for partitions this size." },
      { q: "Can it include a door?", a: "Yes, single or double swing doors fit into the same frame system." },
    ],
  },
  {
    slug: "drywall-systems",
    name: "Drywall systems",
    shortDesc:
      "Fast, clean interior walls built for offices, clinics and retail fit-outs.",
    hero: "Commercial-grade walls, built fast.",
    heroImage:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1000&q=80",
        alt: "Drywall framing crew working on a commercial fit-out",
      },
      {
        src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1000&q=80",
        alt: "Finished retail interior with clean painted drywall",
      },
      {
        src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&q=80",
        alt: "Bright clinic-style interior with smooth partition walls",
      },
    ],
    overview:
      "Our drywall systems are built for commercial fit-outs where speed and a clean finish matter — clinics, retail units and offices. The same steel-and-board method as gypsum partitions, specified for higher traffic and faster turnaround between tenants.",
    process: [
      { title: "Layout", desc: "Wall lines are marked to the approved floor plan." },
      { title: "Frame & board", desc: "Track, studs and boards go up in a single continuous run." },
      { title: "Finish", desc: "Joints, corners and skirting are finished ready for handover." },
    ],
    specs: [
      { label: "Typical thickness", value: "75–125 mm" },
      { label: "Install time", value: "Scales with floor area, day-rate crew" },
      { label: "Fire rating", value: "Available on request" },
      { label: "Best for", value: "Offices, clinics, retail fit-outs" },
    ],
    faqs: [
      { q: "Can you match a tight opening deadline?", a: "Yes — we crew up for commercial fit-outs and can work outside normal hours." },
      { q: "Do you handle electrical routing inside the wall?", a: "We coordinate the cavity for your electrician's conduit before boarding." },
    ],
  },
  {
    slug: "dumpa-false-ceiling",
    name: "Dumpa & false ceiling",
    shortDesc:
      "Recessed drop ceilings that hide wiring and hold cove or spot lighting.",
    hero: "A ceiling that hides the wiring and holds the light.",
    heroImage:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1000&q=80",
        alt: "Recessed gypsum ceiling with warm cove lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        alt: "Living room with a smooth dropped ceiling and spot lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80",
        alt: "Hallway ceiling detail with concealed lighting channel",
      },
    ],
    overview:
      "A dropped gypsum ceiling gives you a clean plane to route wiring, AC ducting and lighting behind, while the visible surface stays smooth and seamless. We build in cove channels or recessed spot cut-outs to whatever lighting plan you want.",
    process: [
      { title: "Frame", desc: "A suspended grid is hung from the slab above." },
      { title: "Board & cut", desc: "Gypsum board is fixed and cut for lighting and vents." },
      { title: "Finish", desc: "Joints are sealed flush and the surface is left paint-ready." },
    ],
    specs: [
      { label: "Drop height", value: "From 100 mm, per ceiling void" },
      { label: "Lighting", value: "Cove, recessed spot, or both" },
      { label: "Install time", value: "3–6 days per room" },
      { label: "Best for", value: "Living rooms, hallways, feature ceilings" },
    ],
    faqs: [
      { q: "Can the AC unit sit inside it?", a: "Yes, split-unit ducting and diffusers are routed inside the ceiling void." },
      { q: "How do I choose a lighting layout?", a: "We sketch a layout options during the site visit before fabrication starts." },
    ],
  },
  {
    slug: "interior-work",
    name: "Interior work",
    shortDesc:
      "Full fit-out — flooring, paneling, cabinetry and finishing, start to end.",
    hero: "One crew, from bare shell to move-in ready.",
    heroImage:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1000&q=80",
        alt: "Warmly lit hallway with finished flooring and paneling",
      },
      {
        src: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=1000&q=80",
        alt: "Fully finished modern living room interior",
      },
      {
        src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1000&q=80",
        alt: "Built-in cabinetry and finishing carpentry detail",
      },
    ],
    overview:
      "Beyond partitions and ceilings, we take on the full interior — flooring, wall paneling, built-in cabinetry, and finishing carpentry. One point of contact manages every trade, so nothing gets lost between contractors.",
    process: [
      { title: "Plan", desc: "A full scope and material list is agreed before work starts." },
      { title: "Build", desc: "Partitions, ceilings, flooring and cabinetry are installed in sequence." },
      { title: "Finish", desc: "Paint, hardware and final detailing complete the handover." },
    ],
    specs: [
      { label: "Scope", value: "Flooring, paneling, cabinetry, paint, fixtures" },
      { label: "Timeline", value: "Set per project after site visit" },
      { label: "Best for", value: "Full home or office fit-outs" },
    ],
    faqs: [
      { q: "Do I need to hire separate contractors?", a: "No — our crew and coordinated subtrades cover the full scope." },
      { q: "Can I supply my own fixtures?", a: "Yes, we're happy to install client-supplied fittings and fixtures." },
    ],
  },
  {
    slug: "cement-partition",
    name: "Cement partition",
    shortDesc:
      "Solid block and cement-board walls where sound isolation matters most.",
    hero: "When a wall needs real mass.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
        alt: "Solid block partition wall under construction",
      },
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1000&q=80",
        alt: "Plastered cement wall finished smooth for paint",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80",
        alt: "Interior room with a solid dividing wall",
      },
    ],
    overview:
      "Where sound isolation or structural load matters more than speed, we build with block or cement board rather than gypsum. It's slower to install and finish but gives a wall real mass — the right call for shared walls, plant rooms and boundary partitions.",
    process: [
      { title: "Build up", desc: "Block or cement board is laid course by course." },
      { title: "Plaster", desc: "The wall is plastered smooth on both faces." },
      { title: "Cure & finish", desc: "The wall cures before final paint or finish is applied." },
    ],
    specs: [
      { label: "Sound rating", value: "Best of our wall systems" },
      { label: "Install time", value: "1–2 weeks including cure time" },
      { label: "Best for", value: "Shared walls, plant rooms, boundary walls" },
    ],
    faqs: [
      { q: "Why choose this over gypsum?", a: "Better sound isolation and load capacity, at the cost of speed." },
      { q: "Can it be plastered to match existing walls?", a: "Yes, we match the existing finish and texture during plastering." },
    ],
  },
  {
    slug: "gypsum-ceiling",
    name: "Gypsum ceiling",
    shortDesc:
      "Smooth, seamless ceilings finished flush and ready to paint or light.",
    hero: "A flush, seamless ceiling plane.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        alt: "Smooth flush gypsum ceiling in a modern room",
      },
      {
        src: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=1000&q=80",
        alt: "Minimalist room with a seamless painted ceiling",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80",
        alt: "Bright interior showing a clean uninterrupted ceiling plane",
      },
    ],
    overview:
      "A direct-fixed gypsum ceiling smooths out an uneven slab into a single flat, paintable plane — no drop void needed. It's the simplest way to get a clean, modern ceiling finish across a whole room.",
    process: [
      { title: "Fix", desc: "Boards are fixed directly to the ceiling structure." },
      { title: "Joint", desc: "Seams are taped and filled to a flush finish." },
      { title: "Finish", desc: "The surface is sanded smooth and left paint-ready." },
    ],
    specs: [
      { label: "Finish", value: "Flush, seamless, paint-ready" },
      { label: "Install time", value: "2–4 days per room" },
      { label: "Best for", value: "Uneven slabs, minimalist ceilings" },
    ],
    faqs: [
      { q: "Can lighting still be recessed?", a: "Shallow fixtures can be cut in; deeper recessed lighting needs a dropped ceiling instead." },
      { q: "Does it hide cracks in the slab above?", a: "Yes, that's one of its main uses — it gives you a clean new surface over an uneven one." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
