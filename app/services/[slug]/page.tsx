import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceAdvantages from "@/components/ServiceAdvantages";
import ServiceUseCases from "@/components/ServiceUseCases";
import ServiceGallery from "@/components/ServiceGallery";
import ServiceProcess from "@/components/ServiceProcess";
import ServiceSpecs from "@/components/ServiceSpecs";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDesc,
    openGraph: {
      title: `${service.name} — M.T Interior & Home Services`,
      description: service.shortDesc,
      images: [service.heroImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} — M.T Interior & Home Services`,
      description: service.shortDesc,
      images: [service.heroImage],
    },
  };
}

// Helper function to get layout variants based on service type
function getLayoutVariants(layoutStyle?: string) {
  const defaults = {
    advantages: "list" as const,
    gallery: "grid" as const,
    process: "numbered" as const,
    specs: "sidebar" as const,
    useCases: "pills" as const,
  };

  switch (layoutStyle) {
    case "alternate":
      return {
        ...defaults,
        gallery: "featured" as const,
        process: "cards" as const,
        advantages: "grid" as const,
      };
    case "featured":
      return {
        ...defaults,
        gallery: "masonry" as const,
        process: "timeline" as const,
        advantages: "cards" as const,
        useCases: "columns" as const,
      };
    case "showcase":
      return {
        ...defaults,
        gallery: "masonry" as const,
        process: "timeline" as const,
        specs: "compact" as const,
      };
    case "minimalist":
      return {
        ...defaults,
        gallery: "featured" as const,
        process: "steps" as const,
        specs: "compact" as const,
        advantages: "grid" as const,
      };
    default:
      return defaults;
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const layouts = getLayoutVariants(service.layoutStyle);
  const isAlternateLayout = service.layoutStyle === "alternate";

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className={`mx-auto grid max-w-7xl gap-10 px-6 lg:gap-8 lg:px-10 ${
            isAlternateLayout ? "lg:grid-cols-[0.9fr_1fr]" : "lg:grid-cols-[1fr_0.9fr]"
          }`}>
            <div className={`flex flex-col justify-center ${isAlternateLayout ? "order-2 lg:order-1" : ""}`}>
              <Link
                href="/#services"
                className="text-sm text-ivory-100/50 hover:text-brass-300"
              >
                ← All services
              </Link>
              <p className="mt-6 text-sm text-brass-400">{service.name}</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-ivory-100 sm:text-5xl">
                {service.hero}
              </h1>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ivory-100/70">
                {service.overview}
              </p>
              <div className="mt-9">
                <Link
                  href="/#contact"
                  className="bg-brass-500 px-7 py-3.5 text-sm font-medium text-navy-950 transition-colors hover:bg-brass-400"
                >
                  Get a free consultation
                </Link>
              </div>
            </div>
            <div className={`cut-diagonal-l relative h-72 overflow-hidden lg:h-auto ${isAlternateLayout ? "order-1 lg:order-2 cut-diagonal-r" : ""}`}>
              <img
                src={service.heroImage}
                alt={service.hero}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <ServiceGallery gallery={service.gallery} variant={layouts.gallery} />

        {/* Description Section - Only for certain layout styles */}
        {service.description && (
          <section className="border-t border-navy-900/10 bg-navy-950 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="max-w-2xl">
                <p className="text-sm text-brass-400">About this service</p>
                <p className="mt-6 text-base leading-relaxed text-ivory-100/80">
                  {service.description}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Pitch Section - Persuasive callout */}
        {service.pitch && (
          <section className="border-t border-navy-900/10 bg-ivory-100 py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className={`grid gap-10 lg:gap-14 ${isAlternateLayout ? "lg:grid-cols-[1fr_0.9fr]" : "lg:grid-cols-[0.9fr_1fr]"}`}>
                <div className={isAlternateLayout ? "lg:order-2" : ""}>
                  <div className="border-l-4 border-brass-500 pl-6">
                    <p className="text-sm text-brass-500">Why choose this</p>
                    <h2 className="mt-3 font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
                      {service.pitch.headline}
                    </h2>
                  </div>
                </div>
                <div className={`flex items-center ${isAlternateLayout ? "lg:order-1" : ""}`}>
                  <p className="text-[1.05rem] leading-relaxed text-navy-900/70">
                    {service.pitch.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Advantages Section */}
        {service.advantages && service.advantages.length > 0 && (
          <ServiceAdvantages
            advantages={service.advantages}
            title="Key Advantages"
            variant={layouts.advantages}
          />
        )}

        {/* Process Section */}
        <ServiceProcess process={service.process} variant={layouts.process} />

        {/* Best For Section */}
        {service.bestFor && service.bestFor.length > 0 && (
          <ServiceUseCases
            bestFor={service.bestFor}
            variant={layouts.useCases}
          />
        )}

        {/* Specs and FAQs Section */}
        <ServiceSpecs
          specs={service.specs}
          faqs={service.faqs}
          variant={layouts.specs}
          cta={{ text: "Book a site visit", href: "/#contact" }}
        />

        {/* Other Services Section */}
        <section className="border-t border-navy-900/10 bg-ivory-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-sm text-brass-500">Other services</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="border border-navy-900/15 px-4 py-2 text-sm text-navy-900/70 transition-colors hover:border-brass-500 hover:text-brass-500"
                  >
                    {s.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}