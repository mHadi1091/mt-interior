import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8 lg:px-10">
            <div className="flex flex-col justify-center">
              <Link
                href="/#services"
                className="text-sm text-ivory-100/50 hover:text-brass-300"
              >
                ← All services
              </Link>
              <p className="mt-6 text-sm tracking-wide text-brass-400">
                {service.name}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-ivory-100 sm:text-5xl">
                {service.hero}
              </h1>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ivory-100/70">
                {service.overview}
              </p>
              <div className="mt-9">
                <Link
                  href="/#contact"
                  className="bg-brass-500 px-7 py-3.5 text-sm font-medium tracking-wide text-navy-950 transition-colors hover:bg-brass-400"
                >
                  Get a free consultation
                </Link>
              </div>
            </div>
            <div className="cut-diagonal-l relative h-72 overflow-hidden lg:h-auto">
              <img
                src={service.heroImage}
                alt={service.hero}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-ivory-100 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {service.gallery.map((img) => (
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

        <section className="border-t border-navy-900/10 bg-ivory-100 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-10">
              <div>
                <p className="text-sm tracking-wide text-brass-500">
                  How it&rsquo;s done
                </p>
                <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
                  Our process for this job.
                </h2>

                <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-3">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="border-t border-navy-900/10 pt-5">
                      <span className="font-display text-lg text-brass-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-xl text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-900/55">
                        {step.desc}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-16">
                  <p className="text-sm tracking-wide text-brass-500">
                    Common questions
                  </p>
                  <div className="mt-6 divide-y divide-navy-900/10 border-t border-navy-900/10">
                    {service.faqs.map((f) => (
                      <div key={f.q} className="py-5">
                        <h3 className="font-display text-lg text-navy-900">
                          {f.q}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-navy-900/60">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="h-fit border border-navy-900/10 p-7">
                <h3 className="font-display text-lg text-navy-900">
                  At a glance
                </h3>
                <dl className="mt-5 flex flex-col gap-4">
                  {service.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-xs text-navy-900/45">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm text-navy-900">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/#contact"
                  className="mt-7 block w-full border border-brass-500 px-5 py-3 text-center text-sm font-medium text-brass-500 transition-colors hover:bg-brass-500 hover:text-navy-950"
                >
                  Book a site visit
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-navy-900/10 bg-ivory-100 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <p className="text-sm tracking-wide text-brass-500">
              Other services
            </p>
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
