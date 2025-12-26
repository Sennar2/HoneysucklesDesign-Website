function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-sage text-white">
      <div className="mx-auto max-w-6xl px-6 py-8 grid gap-8 md:grid-cols-3 items-center">
        
        {/* LEFT: Brand & copyright */}
        <div className="space-y-2 text-sm md:text-left text-center">
          <h4 className="font-display text-xl">Honeysuckles Design</h4>
          <p className="text-white/90">
            Thoughtful branding & web design, inspired by nature.
          </p>
          <p className="pt-2 text-xs text-white/70">
            © {year} Honeysuckles Design. All rights reserved.
          </p>
        </div>

        {/* CENTER: Connect */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/85">
            Connect
          </p>

          <a
            href="https://instagram.com/honeysucklesdesign"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-cream/70 bg-white/5 text-white shadow-sm hover:bg-white/10 hover:shadow-md hover:-translate-y-[1px] transition"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        {/* RIGHT: Contact */}
        <div className="space-y-2 text-sm md:text-right text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/85">
            Contact
          </p>

          <a
            href="mailto:hello@honeysuckles.design"
            className="block text-white underline underline-offset-4 decoration-cream/60 hover:text-white"
          >
            hello@honeysuckles.design
          </a>

          <a
            href="/contact"
            className="block text-white/90 hover:text-white"
          >
            Project inquiries →
          </a>
        </div>
      </div>
    </footer>
  );
}
