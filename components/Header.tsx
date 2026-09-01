"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";

const NAV_LINKS = [
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl italic text-brass-400">M.T</span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium tracking-wide text-ivory-100">
              Interior &amp; Home Services
            </span>
            <span className="text-[11px] text-ivory-100/50">
              Elegance · Quality · Home Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1.5 text-sm text-ivory-100/80 transition-colors hover:text-brass-300"
              aria-expanded={servicesOpen}
            >
              Services
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2.5 4.5L6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4">
                <div className="border border-ivory-100/10 bg-navy-950 shadow-2xl">
                  <Link
                    href="/#services"
                    onClick={() => setServicesOpen(false)}
                    className="block border-b border-ivory-100/10 px-5 py-3 text-xs tracking-wide text-brass-400 hover:bg-ivory-100/5"
                  >
                    VIEW ALL SERVICES →
                  </Link>
                  <div className="grid grid-cols-1 gap-0.5 p-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="rounded-sm px-3 py-2.5 text-sm text-ivory-100/80 transition-colors hover:bg-ivory-100/5 hover:text-brass-300"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

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
            href="/#contact"
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
        <div className="max-h-[80vh] overflow-y-auto border-t border-ivory-100/10 bg-navy-950 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-base text-ivory-100/85"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M2.5 4.5L6 8l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="mb-2 flex flex-col gap-0.5 border-l border-brass-500/30 pl-4">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm text-ivory-100/70"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ivory-100/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 border border-brass-500 px-5 py-2.5 text-center text-sm font-medium text-brass-300"
            >
              Book consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}