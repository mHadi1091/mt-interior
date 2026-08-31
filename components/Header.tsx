"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl italic text-brass-400">M.T</span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium tracking-wide text-ivory-100">
              Interior &amp; Home Services
            </span>
            <span className="text-[11px] text-ivory-100/50">
              Elegance · Quality · Home Solutions
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ivory-100/80 transition-colors hover:text-brass-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+923201983176"
            className="text-sm text-ivory-100/80 hover:text-brass-300"
          >
            +92 320 1983176
          </a>
          <a
            href="#contact"
            className="rounded-none border border-brass-500 px-5 py-2 text-sm font-medium text-brass-300 transition-colors hover:bg-brass-500 hover:text-navy-950"
          >
            Book consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ivory-100 transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ivory-100 transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-ivory-100/10 bg-navy-950 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-ivory-100/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-brass-500 px-5 py-2.5 text-center text-sm font-medium text-brass-300"
            >
              Book consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
