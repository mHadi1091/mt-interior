export default function Contact() {
  return (
    <section id="contact" className="bg-navy-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-sm tracking-wide text-brass-400">
              Free consultation
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ivory-100 sm:text-5xl">
              Tell us what you&rsquo;re building.
            </h2>
            <p className="mt-5 max-w-md text-ivory-100/65">
              Send a few details and we&rsquo;ll get back to you to arrange a
              site visit — no charge, no obligation.
            </p>

            <form className="mt-10 flex max-w-md flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-ivory-100/50">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="border-b border-ivory-100/20 bg-transparent py-2 text-ivory-100 outline-none transition-colors placeholder:text-ivory-100/30 focus:border-brass-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs text-ivory-100/50">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-b border-ivory-100/20 bg-transparent py-2 text-ivory-100 outline-none transition-colors placeholder:text-ivory-100/30 focus:border-brass-400"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="need" className="text-xs text-ivory-100/50">
                  What do you need done?
                </label>
                <textarea
                  id="need"
                  name="need"
                  rows={3}
                  className="resize-none border-b border-ivory-100/20 bg-transparent py-2 text-ivory-100 outline-none transition-colors placeholder:text-ivory-100/30 focus:border-brass-400"
                  placeholder="e.g. Glass partition for a 2-room office"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-fit bg-brass-500 px-7 py-3.5 text-sm font-medium tracking-wide text-navy-950 transition-colors hover:bg-brass-400"
              >
                Request consultation
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between border-t border-ivory-100/10 pt-10 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <dl className="flex flex-col gap-8">
              <div>
                <dt className="text-xs tracking-wide text-brass-400">
                  Call
                </dt>
                <dd className="mt-2">
                  <a
                    href="tel:+923201983176"
                    className="font-display text-2xl text-ivory-100 hover:text-brass-300"
                  >
                    +92 320 1983176
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-brass-400">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:Mr.tayyabaz.1864934@gmail.com"
                    className="break-all text-ivory-100 hover:text-brass-300"
                  >
                    Mr.tayyabaz.1864934@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide text-brass-400">
                  Visit
                </dt>
                <dd className="mt-2 leading-relaxed text-ivory-100/75">
                  Chandrawan Road Chungi Amar Sidhu
                  <br />
                  Johar Town, Shadiwal Chowk
                  <br />
                  Lahore
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
