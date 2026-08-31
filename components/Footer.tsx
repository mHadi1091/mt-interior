import Link from "next/link";
import { services } from "@/lib/services";

export default function Footer() {
  const mid = Math.ceil(services.length / 2);
  const colA = services.slice(0, mid);
  const colB = services.slice(mid);

  return (
    <footer className="bg-navy-950 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 border-b border-ivory-100/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl italic text-brass-400">
              M.T
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-100/55">
              Aluminum, glass and gypsum interior fit-out, built and
              installed by our own crew in Lahore.
            </p>
            <p className="mt-5 text-xs tracking-wide text-brass-400/80">
              Elegance · Quality · Home Solutions
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-wide text-ivory-100/40">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {colA.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ivory-100/70 hover:text-brass-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-wide text-ivory-100/40 sm:invisible lg:visible">
              &nbsp;
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 lg:mt-4">
              {colB.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ivory-100/70 hover:text-brass-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-wide text-ivory-100/40">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ivory-100/70">
              <li>
                <a href="tel:+923201983176" className="hover:text-brass-300">
                  +92 320 1983176
                </a>
              </li>
              <li>
                <a
                  href="mailto:Mr.tayyabaz.1864934@gmail.com"
                  className="break-all hover:text-brass-300"
                >
                  Mr.tayyabaz.1864934@gmail.com
                </a>
              </li>
              <li className="leading-relaxed text-ivory-100/55">
                Chandrawan Road Chungi Amar Sidhu,
                <br />
                Johar Town, Shadiwal Chowk, Lahore
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ivory-100/40 sm:flex-row">
          <p>© {new Date().getFullYear()} M.T Interior &amp; Home Services.</p>
          <div className="flex items-center gap-6">
            <Link href="/#services" className="hover:text-brass-300">
              Services
            </Link>
            <Link href="/#work" className="hover:text-brass-300">
              Work
            </Link>
            <Link href="/#contact" className="hover:text-brass-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
