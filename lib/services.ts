export type ServiceDetail = {
  slug: string;
  name: string;
  shortDesc: string;
  hero: string;
  heroImage: string;
  gallery: { src: string; alt: string }[];
  overview: string;
  description: string;
  pitch: { headline: string; body: string };
  advantages: string[];
  bestFor: string[];
  process: { title: string; desc: string }[];
  specs: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  layoutStyle?: "default" | "alternate" | "featured" | "minimalist" | "showcase";
};

export const services: ServiceDetail[] = [
  {
    slug: "gypsum-board-partition",
    name: "Gypsum board partition",
    shortDesc:
      "Lightweight, non-load-bearing interior walls using gypsum plaster and steel frames. Fast, cost-effective, and ready in 2-4 days.",
    hero: "Walls that go up in days, not weeks.",
    heroImage:
      "https://images.unsplash.com/photo-1618221639468-c6ee66c69eba?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1618221639468-c6ee66c69eba?w=1000&q=80",
        alt: "Freshly framed gypsum partition with galvanized steel studs",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=80",
        alt: "Finished smooth gypsum wall painted and ready for handover",
      },
      {
        src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1000&q=80",
        alt: "Modern office with slim gypsum partition dividing workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
        alt: "Close-up of clean taped joint on a gypsum partition wall",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        alt: "Bright room divided by a freshly finished gypsum partition",
      },
    ],
    overview:
      "Gypsum board partitions are lightweight, non-load-bearing interior walls made from gypsum plaster pressed between two layers of paper, mounted on galvanized steel frames. Using dry construction techniques with steel studs, self-tapping screws, and joint tape/compound, they offer seamless finishes with no wet work, no curing time, and no heavy mess.",
    description:
      "Installation uses dry construction techniques with steel studs, gypsum boards secured by self-tapping screws, and joint tape/compound for seamless finishes. Complete installation in 2-4 days.",
    pitch: {
      headline: "The fastest way to reshape a room — without the mess.",
      body: "If you need a new wall this month, not next quarter, this is it. No wet plaster, no weeks of curing, no dust storm across your home or office. Our crew frames, boards, and finishes a room in as little as 2 days — and it comes out paint-ready, sound-dampened, and strong enough for shelving. It's the partition choice for anyone who values speed without sacrificing a clean, professional finish.",
    },
    advantages: [
      "**Rapid installation** reduces project timeline dramatically",
      "Highly **fire-resistant** (gypsum releases water as steam when heated)",
      "Excellent **sound insulation**, especially when filled with acoustic material",
      "**Smooth finish** ready for paint or wallpaper immediately",
      "**Lightweight**, making installation simple with minimal structural impact",
      "Significantly **cheaper than masonry** partitions for both materials and labor",
      "**Flexible design** — easily integrated with electrical wiring, outlets, shelving, niches",
    ],
    bestFor: [
      "Office reconfigurations",
      "Bedroom divisions",
      "Home offices",
      "Rental properties",
      "Renovations where speed matters",
      "Spaces requiring sound privacy without structural loading",
    ],
    process: [
      { title: "Frame", desc: "**Galvanized steel channel tracks** are fixed to floor and ceiling using concrete anchors." },
      { title: "Stud & Board", desc: "Steel studs are installed vertically, **gypsum boards** are screwed to both faces, wiring conduit routed inside." },
      { title: "Joint & Finish", desc: "Joints are taped, filled with **compound** in multiple coats, sanded smooth, and left paint-ready." },
    ],
    specs: [
      { label: "Wall thickness", value: "75–150 mm" },
      { label: "Installation time", value: "2–4 days per room" },
      { label: "Fire rating", value: "Highly fire-resistant core" },
      { label: "Sound insulation", value: "Good (STC 40–50), better with acoustic fill" },
      { label: "Load capacity", value: "Moderate (up to 25 kg with anchors)" },
      { label: "Cost", value: "Most economical partition type" },
    ],
    faqs: [
      { q: "Can it hold shelves or a TV?", a: "Yes, with the right toggle anchors or a plywood backer installed inside the frame at build time." },
      { q: "Does it need special maintenance?", a: "No — once painted, it requires no more maintenance than a traditional wall." },
      { q: "Can electrical wiring be routed inside?", a: "Yes, the cavity is perfect for conduit, outlets, and switches without surface-mounted boxes." },
      { q: "Is it soundproof?", a: "Not completely, but filling the cavity with acoustic insulation significantly improves sound isolation." },
    ],
    layoutStyle: "default",
  },
  {
    slug: "aluminum-glass-partition",
    name: "Aluminum & glass partition",
    shortDesc:
      "Modern transparent divisions with slim aluminum frames and tempered glass. Maximizes light, creates openness, customizable finishes.",
    hero: "Divide the space without closing it off.",
    heroImage:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=80",
        alt: "Slim aluminum-framed glass partition in a modern office corridor",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=80",
        alt: "Frosted glass meeting room partition with minimalist aluminum frame",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80",
        alt: "Modern office space with full-height tempered glass walls",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
        alt: "Glass partition door detail with brushed aluminum handle",
      },
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80",
        alt: "Sunlit open-plan office divided by glass and aluminum partitions",
      },
    ],
    overview:
      "Aluminum and glass partitions combine slim aluminum frame profiles with tempered or frosted glass panels to create transparent, modern space divisions. The aluminum is powder-coated for corrosion resistance and available in any RAL color. Glass options range from clear to frosted or tinted, with tempered or laminated safety glass for durability.",
    description:
      "The system features narrow sightlines creating a minimalist aesthetic that makes spaces feel open and connected while maintaining visual separation.",
    pitch: {
      headline: "Privacy that doesn't cost you your light.",
      body: "Solid walls kill natural light and make small offices feel smaller. Glass partitions solve that — you get real acoustic and visual separation between rooms, but the space still feels open, bright, and connected. It's the upgrade most modern offices and clinics choose the moment they see it installed next door. Frosting, tinting, and integrated doors mean you control exactly how much privacy each room gets.",
    },
    advantages: [
      "**Maximizes natural light** — glass doesn't block daylight like walls",
      "Creates **openness** while still separating zones — ideal for collaborative offices",
      "Modern, sleek aesthetic that suits **minimalist and contemporary** design",
      "Durable — aluminum resists corrosion, glass is **tempered for impact resistance**",
      "**Customizable** — choose clear, frosted, tinted glass; any aluminum color",
      "Can integrate **swing doors** for access without removing a section",
      "Easy to **reposition** if office layout changes",
      "**Acoustic variants** available with specialized sealing for sound reduction",
    ],
    bestFor: [
      "Modern offices and meeting rooms",
      "Executive spaces and suites",
      "Retail showrooms",
      "Home entryways",
      "Clinics requiring visual separation with transparency",
      "Spaces that need privacy but shouldn't feel closed-off",
    ],
    process: [
      { title: "Measure & Design", desc: "Exact opening dimensions and **glass specifications** are confirmed on-site." },
      { title: "Fabricate", desc: "**Aluminum profiles** are cut and the frame is precisely assembled off-site." },
      { title: "Glaze & Install", desc: "**Tempered/frosted glass** is fitted into the frame and the complete unit is installed with weatherseal." },
    ],
    specs: [
      { label: "Glass options", value: "Clear, frosted, tinted, laminated, acoustic" },
      { label: "Frame material", value: "Aluminum (powder-coated, any RAL color)" },
      { label: "Frame sightline", value: "Ultra-narrow 38–50mm profiles" },
      { label: "Installation time", value: "1–3 days per opening" },
      { label: "Glass thickness", value: "6–10mm tempered or laminated" },
      { label: "Best for", value: "Modern offices, meeting rooms, retail, entryways" },
    ],
    faqs: [
      { q: "Is the glass safe if it breaks?", a: "We use tempered glass (shatters into small harmless pieces) or laminated glass (holds together) — both are safety standards for partitions." },
      { q: "Can it include a door?", a: "Yes, single or double swing doors can be integrated into the same frame system with matching aluminum and hardware." },
      { q: "Can the glass be frosted for privacy?", a: "Yes, we offer full frosting, partial frosting, or even custom patterns applied to the glass." },
      { q: "How is it maintained?", a: "Simple — wipe glass with standard glass cleaner, aluminum frames need occasional dusting. No special maintenance required." },
    ],
    layoutStyle: "alternate",
  },  {
    slug: "drywall-systems",
    name: "Drywall systems",
    shortDesc:
      "Production-scale gypsum partitions optimized for commercial fit-outs. Fire-rated, moisture-resistant, smooth finishes.",
    hero: "Commercial-grade walls, built fast.",
    heroImage:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1000&q=80",
        alt: "Drywall framing crew working on a large commercial fit-out project",
      },
      {
        src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1000&q=80",
        alt: "Finished retail interior with clean painted drywall and smooth surfaces",
      },
      {
        src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=1000&q=80",
        alt: "Professional clinic interior with pristine partition walls and finishes",
      },
      {
        src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&q=80",
        alt: "Large open commercial floor plate mid fit-out with drywall framing",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=80",
        alt: "Bright modern office corridor with commercial drywall partitions",
      },
    ],
    overview:
      "Drywall systems are production-scale versions of gypsum board partitions, optimized for commercial fit-outs where speed and consistency matter. Using the same galvanized steel frame + gypsum board method but scaled for rapid crew installation across larger floor areas.",
    description:
      "Fire-resistant or moisture-resistant board variants are specified depending on building code and use. The finish is identical — smooth, paint-ready surfaces with minimal rework.",
    pitch: {
      headline: "Built for deadlines that don't move.",
      body: "Commercial fit-outs live and die by the handover date. Our drywall crews are set up to move fast across large floor areas without cutting corners — fire-rated boards where code demands it, moisture-resistant boards where they don't, and a finish that's smooth enough to hand straight to your painter. If your landlord or client has a fixed date circled on the calendar, this is the system built to hit it.",
    },
    advantages: [
      "Built for **commercial speed** — whole floor sections can go up in days",
      "**Fire-rated options** available (important for retail, clinics, institutions)",
      "**Moisture-resistant variants** for kitchens or humid environments",
      "Coordinate **electrical conduit** and HVAC routing before boarding",
      "**Minimal site disruption** — dry construction reduces dust and odor",
      "**Smooth finish** from day one (no plastering step like masonry)",
      "Highly **cost-effective** at scale",
      "Can handle **high-traffic wear** better than residential gypsum",
    ],
    bestFor: [
      "**Office fit-outs**",
      "**Retail spaces**",
      "Clinics and **medical facilities**",
      "**Institutional buildings**",
      "Quick **tenant turnovers**",
      "**Commercial renovations**",
      "Spaces with **tight deadlines**",
    ],
    process: [
      { title: "Layout", desc: "Wall lines are marked to approved floor plan and **building code** requirements." },
      { title: "Frame & Board", desc: "Tracks, studs, and boards are installed in coordinated runs with **electrical and HVAC** coordinated." },
      { title: "Finish & Sanding", desc: "Joints are filled, sanded smooth, and the space is left **paint-ready** for tenant finishing." },
    ],
    specs: [
      { label: "Typical thickness", value: "75–125 mm" },
      { label: "Installation time", value: "Scales with floor area, day-rate crew" },
      { label: "Fire rating", value: "Type X fire-resistant available" },
      { label: "Moisture resistance", value: "Available for kitchens and utility areas" },
      { label: "Finish", value: "Smooth, paint-ready, or primer-ready" },
      { label: "Best for", value: "Commercial office, retail, clinics, institutions" },
    ],
    faqs: [
      { q: "Can you match a tight opening deadline?", a: "Yes — we crew up for commercial fit-outs and can work evening/weekend schedules if needed." },
      { q: "Do you handle electrical routing inside the wall?", a: "We coordinate the cavity for your electrician's conduit before boarding. Electrical subs pull their own wires." },
      { q: "What's the difference from residential gypsum partitions?", a: "Thicker boards, fire-rating options, faster crews, and building-code compliance for commercial buildings." },
      { q: "Can paint finish be included?", a: "We deliver primer-ready. Paint is typically handled by the tenant or general contractor." },
    ],
    layoutStyle: "featured",
  },
  {
    slug: "dumpa-false-ceiling",
    name: "Dumpa & false ceiling",
    shortDesc:
      "Suspended gypsum ceilings with integrated lighting chases. Hides wiring, AC ducting, and infrastructure while creating clean aesthetic.",
    hero: "A ceiling that hides the wiring and holds the light.",
    heroImage:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1000&q=80",
        alt: "Suspended gypsum ceiling with integrated warm cove lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        alt: "Modern living room with smooth dropped ceiling and recessed lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80",
        alt: "Ceiling detail showing concealed lighting channel and suspension system",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80",
        alt: "Bright room with recessed spotlights set into a false ceiling",
      },
      {
        src: "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=1000&q=80",
        alt: "Elegant dining space lit by cove lighting inside a dropped ceiling",
      },
    ],
    overview:
      "A false ceiling (suspended or dropped ceiling) is a secondary ceiling hung below the structural slab using a metal frame suspension system. Gypsum boards are screwed to this frame creating a smooth, flat soffit. The void above becomes a hidden chase for electrical wiring, AC ducting, plumbing, and integrated lighting.",
    description:
      "Can be as low as 100mm drop or deeper depending on wiring needs. Finished surface is seamless and paint-ready. The void provides space for cove lighting, recessed spots, and concealed infrastructure.",
    pitch: {
      headline: "The single upgrade that makes a room look designed.",
      body: "A false ceiling does two jobs at once: it hides every messy wire, duct, and slab crack above your head, and it gives you a canvas for lighting that a flat painted ceiling never could. Cove lighting, recessed spots, layered depth — this is usually the difference between a room that looks 'finished' and one that looks 'designed.' It also protects your AC ducting and wiring in a fire-resistant void, so it's function and finish in one step.",
    },
    advantages: [
      "**Conceals** messy slab defects, cracks, and uneven surfaces",
      "Creates a clean space for routing **electrical, AC, plumbing** without surface chases",
      "Integrates **lighting** elegantly — recessed spots, cove channels, pendant mounts",
      "**Acoustic properties** help dampen sound in rooms",
      "**Fire-resistant core** protects systems in the void above",
      "**Thermal insulation** improves room cooling efficiency",
      "Smooth, modern aesthetic suited to **residential and commercial** spaces",
      "Can be designed with subtle depth or **architectural patterns**",
      "Easy to access utilities by **removing panels** if maintenance needed",
    ],
    bestFor: [
      "Living rooms and bedrooms",
      "Hallways and corridors",
      "Kitchens",
      "Commercial spaces",
      "Anywhere existing ceilings are damaged",
      "Spaces requiring integrated lighting design",
      "Buildings needing to hide AC and electrical runs",
    ],
    process: [
      { title: "Frame", desc: "**Suspension wires** and metal channels are hung from the structural slab in a grid pattern." },
      { title: "Board & Cut", desc: "Gypsum boards are screwed to frame and cut for **lighting fixtures**, AC vents, and other services." },
      { title: "Seal & Finish", desc: "Joints are sealed flush, edges trimmed, and surface left **paint-ready** with seamless appearance." },
    ],
    specs: [
      { label: "Drop height", value: "Minimum 100mm, varies by services routing" },
      { label: "Lighting options", value: "Cove, recessed spots, pendant mounts, or combination" },
      { label: "Installation time", value: "3–6 days per room" },
      { label: "Acoustic rating", value: "Good sound dampening, optional acoustic board" },
      { label: "Material finish", value: "Smooth paint-ready gypsum" },
      { label: "Best for", value: "Residential living spaces, commercial offices, feature ceilings" },
    ],
    faqs: [
      { q: "Can the AC unit sit inside it?", a: "Yes, split-unit ducting and diffusers are routed inside the ceiling void with proper insulation." },
      { q: "How do I choose a lighting layout?", a: "We sketch layout options during the site visit before fabrication. Options include cove, recessed, or mixed approaches." },
      { q: "Will it reduce my ceiling height too much?", a: "It drops the ceiling by the amount needed for wiring/AC (usually 100-150mm). We optimize the height during design." },
      { q: "Can it be accessed for maintenance?", a: "Yes, panels can be designed for easy removal if utilities above need servicing." },
    ],
    layoutStyle: "showcase",
  },
  {
    slug: "interior-work",
    name: "Interior work",
    shortDesc:
      "Full end-to-end fit-out including partitions, ceilings, flooring, cabinetry, and finishes. One crew, seamless coordination.",
    hero: "One crew, from bare shell to move-in ready.",
    heroImage:
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1000&q=80",
        alt: "Warmly lit hallway with finished flooring, walls, and integrated lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=1000&q=80",
        alt: "Fully finished modern living room with coordinated finishes",
      },
      {
        src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1000&q=80",
        alt: "Built-in cabinetry and finishing carpentry detail work",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80",
        alt: "Complete open-plan kitchen and living area fit-out",
      },
      {
        src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000&q=80",
        alt: "Move-in ready bedroom with coordinated flooring, paint, and fixtures",
      },
    ],
    overview:
      "Full interior fit-out means end-to-end design and construction of a complete interior space. Beyond partitions and ceilings, this covers flooring installation, wall paneling, built-in cabinetry, paint, hardware, fixtures, and finishing details.",
    description:
      "One crew manages the sequence: partitions → flooring prep → cabinetry → finishing paint/hardware. Single point of contact means no gaps between contractors, coordinated scheduling, and unified accountability.",
    pitch: {
      headline: "Stop juggling five contractors. Hire one crew instead.",
      body: "Every gap between trades — the electrician waiting on the drywaller, the painter waiting on the carpenter — is where projects lose weeks and budgets balloon. We run the whole sequence ourselves: walls, ceilings, flooring, cabinetry, and finishing, one team, one schedule, one person you call when you have a question. If you want a bare shell turned into a move-in ready space without becoming a full-time project manager yourself, this is the service built for exactly that.",
    },
    advantages: [
      "**One crew** from start to finish — no handoffs between trades",
      "**Coordinated sequencing** prevents delays and rework",
      "**Integrated design** (all elements planned to work together)",
      "Consistent quality and **accountability** from concept to handover",
      "Client supplies their own **fixtures** if desired (we install them)",
      "Handles **full scope** — you don't juggle multiple contractors",
      "**Faster overall timeline** due to coordination",
      "**Unified warranty** and single contact for issues",
    ],
    bestFor: [
      "Full home renovations",
      "Office buildouts from shell",
      "Boutique retail fit-outs",
      "Clinics and medical spaces",
      "Guest suites",
      "Any project requiring seamless integration of walls, ceilings, flooring, and finishes",
    ],
    process: [
      { title: "Design & Plan", desc: "Full scope, materials, fixtures, and **timeline** are planned and approved before work begins." },
      { title: "Build Sequence", desc: "Partitions, ceilings, flooring, and **cabinetry** installed in coordinated sequence, no idle time." },
      { title: "Finish & Handover", desc: "Paint, hardware, fixtures, and final detailing complete and space is **inspected for quality**." },
    ],
    specs: [
      { label: "Scope coverage", value: "Walls, ceilings, flooring, cabinetry, paint, fixtures, hardware" },
      { label: "Project timeline", value: "Customized per project scope (typically 6-12 weeks)" },
      { label: "Single point contact", value: "One project manager throughout" },
      { label: "Warranty", value: "Unified warranty on all components and labor" },
      { label: "Customization", value: "Fully bespoke to client needs and vision" },
      { label: "Best for", value: "Complete residential or commercial fit-outs" },
    ],
    faqs: [
      { q: "Do I need to hire separate contractors?", a: "No — our crew and coordinated subtrades cover the full scope from start to finish." },
      { q: "Can I supply my own fixtures?", a: "Yes, we're happy to install client-supplied fittings, fixtures, and materials." },
      { q: "What if I change my mind mid-project?", a: "Changes are handled with updated timelines and pricing. We're flexible within reason." },
      { q: "Do you provide design services?", a: "We work with your designer or can recommend partners. Our focus is excellent execution." },
    ],
    layoutStyle: "minimalist",
  },
  {
    slug: "cement-partition",
    name: "Cement partition",
    shortDesc:
      "Solid block and cement-board walls for superior sound isolation and load capacity. Built to last.",
    hero: "When a wall needs real mass.",
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
        alt: "Solid block partition wall under construction, course by course",
      },
      {
        src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1000&q=80",
        alt: "Plastered cement wall finished smooth and ready for paint",
      },
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&q=80",
        alt: "Interior room with a solid dividing cement partition wall",
      },
      {
        src: "https://images.unsplash.com/photo-1541976590-713941681591?w=1000&q=80",
        alt: "Mason laying concrete blocks course by course for a partition",
      },
      {
        src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80",
        alt: "Finished apartment wall showing solid cement partition construction",
      },
    ],
    overview:
      "Cement partitions are solid block or cement-board walls built where sound isolation and structural load-bearing matter more than speed. Laid course-by-course using block or cement board with adhesive/mortar, plastered smooth on both faces, then painted.",
    description:
      "Much denser and more rigid than gypsum — better acoustic performance and load capacity, but slower to install (1-2 weeks including cure time). The result is a wall with real permanence and performance.",
    pitch: {
      headline: "When you need silence, not just a divider.",
      body: "Gypsum and glass solve most partition problems, but not all of them. If you're separating apartments, boxing in a noisy plant room, or need a wall strong enough to hang cabinets and heavy fixtures without special anchors, mass wins. A cement partition takes longer to build and cure, but it delivers real, permanent sound isolation and structural strength that lighter systems simply can't match — the choice for walls that need to disappear acoustically, not just visually.",
    },
    advantages: [
      "**Best sound isolation** of all partition types (mass is what stops sound)",
      "High **load-bearing capacity** — can support heavy fixtures, cabinetry",
      "**Durable and maintenance-free**",
      "Excellent for **shared walls** between units (apartments, offices)",
      "Ideal for **utility plant rooms** with heavy equipment",
      "Can be **plastered** to match existing wall texture/finish",
      "**Non-combustible**, solid construction for boundary partitions",
      "**Long lifespan** with minimal damage risk",
    ],
    bestFor: [
      "**Shared apartment walls**",
      "**Boundary/perimeter walls** between units",
      "Plant rooms with **mechanical equipment**",
      "Spaces needing **maximum acoustic privacy**",
      "Areas requiring **high load capacity**",
      "Commercial buildings with **stringent sound requirements**",
    ],
    process: [
      { title: "Build up", desc: "Block or cement board is laid course by course with **mortar or adhesive**, plumb and level." },
      { title: "Cure", desc: "Wall is allowed to **cure** and achieve full strength (typically 7 days before plastering)." },
      { title: "Plaster & Finish", desc: "Wall is **plastered smooth** on both faces, then primed and painted to desired finish." },
    ],
    specs: [
      { label: "Sound rating", value: "Excellent (STC 55–65)" },
      { label: "Load capacity", value: "Excellent (full structural load)" },
      { label: "Wall thickness", value: "100–150mm (typical)" },
      { label: "Installation time", value: "1–2 weeks including cure" },
      { label: "Material", value: "Concrete block or cement board" },
      { label: "Best for", value: "Shared walls, plant rooms, sound isolation" },
    ],
    faqs: [
      { q: "Why choose this over gypsum?", a: "Better sound isolation and unlimited load capacity, at the cost of speed and installation time." },
      { q: "Can it be plastered to match existing walls?", a: "Yes, we match the existing finish, texture, and color during plastering." },
      { q: "How long does it take to cure?", a: "Mortar cures in about 7 days before plastering can begin. Total project time is 1-2 weeks." },
      { q: "Can it hold shelves and heavy fixtures?", a: "Yes, it's designed for full load capacity — you can anchor anything securely." },
    ],
    layoutStyle: "featured",
  },
  {
    slug: "gypsum-ceiling",
    name: "Gypsum ceiling",
    shortDesc:
      "Smooth, seamless flush ceilings affixed directly to slab. No drop needed, minimal headroom loss.",
    hero: "A flush, seamless ceiling plane.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
        alt: "Smooth flush gypsum ceiling in a modern living room space",
      },
      {
        src: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=1000&q=80",
        alt: "Minimalist modern room with seamless painted ceiling plane",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80",
        alt: "Bright interior showing clean uninterrupted ceiling with recessed light",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1000&q=80",
        alt: "Low-headroom apartment room with flush direct-fixed ceiling finish",
      },
      {
        src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1000&q=80",
        alt: "Clean modern bedroom with smooth ceiling and minimal fixtures",
      },
    ],
    overview:
      "A direct-fixed gypsum ceiling is a smooth, seamless ceiling mounted flush to an existing slab using adhesive or fasteners. It smooths out uneven, cracked, or discolored slabs into a single paint-ready plane. Similar to a false ceiling in finish, but no drop/suspension frame needed.",
    description:
      "Ideal for low-headroom spaces where a drop isn't feasible. Boards are affixed directly to the structure above. Finishing is identical — taped joints, compound, paint. No void = no services above, but perfect for cosmetic upgrades.",
    pitch: {
      headline: "A brand new ceiling, without losing an inch of height.",
      body: "Not every room can afford to drop 100-150mm for a false ceiling — low-headroom apartments and older buildings often can't. A direct-fixed gypsum ceiling gives you the same flawless, paint-ready surface without the suspension frame, hiding slab cracks and stains at a fraction of the height loss. It's the quick, budget-friendly fix for a room that just needs its ceiling to look brand new again.",
    },
    advantages: [
      "Covers **slab defects** and creates a uniform, modern ceiling plane",
      "**No headroom loss** (compared to a dropped ceiling)",
      "**Fast installation** — glue or mechanical fasteners bond boards to slab",
      "**Smooth finish** ready for paint immediately",
      "**Cost-effective** (no suspension frame, just boards and fasteners)",
      "Can integrate **shallow recessed lighting**",
      "Clean, **minimalist aesthetic**",
      "**Reduces maintenance needs** vs. exposed slab",
    ],
    bestFor: [
      "Rooms with low headroom where a drop isn't possible",
      "Spaces where simplicity is preferred",
      "Covering damaged or stained slabs",
      "Apartments/offices needing quick ceiling refresh",
      "Minimalist designs",
      "Spaces where any lost ceiling height is critical",
    ],
    process: [
      { title: "Prepare", desc: "Existing slab is cleaned and any **loose material** removed or patched." },
      { title: "Fix Boards", desc: "Gypsum boards are affixed directly to slab using **adhesive, screws**, or combination method." },
      { title: "Joint & Finish", desc: "Seams are taped, filled, sanded smooth, and surface is left **paint-ready**." },
    ],
    specs: [
      { label: "Finish", value: "Flush, seamless, paint-ready" },
      { label: "Installation method", value: "Direct-fixed to existing slab" },
      { label: "Installation time", value: "2–4 days per room" },
      { label: "Headroom impact", value: "Minimal (board thickness only, 12mm)" },
      { label: "Lighting options", value: "Shallow recessed fixtures only" },
      { label: "Best for", value: "Cosmetic slab upgrades, minimalist interiors" },
    ],
    faqs: [
      { q: "Can lighting still be recessed?", a: "Shallow fixtures can be cut in, but deep recessed lighting needs a dropped ceiling instead." },
      { q: "Does it hide cracks in the slab above?", a: "Yes, that's one of its main uses — it gives you a clean new surface over an uneven, cracked one." },
      { q: "What if my slab is very uneven?", a: "Leveling strips can be added first to create a flat base for boards. Discuss with us during site visit." },
      { q: "Is it good for kitchens or bathrooms?", a: "Yes, but moisture-resistant board variants are recommended for high-humidity areas." },
    ],
    layoutStyle: "minimalist",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}