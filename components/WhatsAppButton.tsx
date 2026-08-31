export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'd like a free consultation for an interior fit-out."
  );
  const href = `https://wa.me/923201983176?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-navy-950/20 transition-transform hover:scale-105 focus-visible:scale-105 sm:bottom-8 sm:right-8"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.33 4.99L2 22l5.2-1.36a9.9 9.9 0 0 0 4.83 1.23h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.55 2 12.04 2zm5.86 14.24c-.25.7-1.45 1.34-2 1.42-.53.08-1.13.11-1.83-.12-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.85 2.07.92 2.22.07.15.12.32.02.51-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.28-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.82.9-1.1.19-.28.38-.23.63-.14.26.09 1.64.78 1.92.92.28.14.47.21.53.32.07.12.07.68-.18 1.38z" />
      </svg>
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded bg-navy-950 px-3 py-1.5 text-sm text-ivory-100 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
