// components/Hero.jsx
export default function Hero(){
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Keep aspect ratio: set width only, let height auto */}
        <img
          src="/logo.png"
          alt="Honeysuckles Design logo"
          className="mx-auto w-40 md:w-56 lg:w-64 h-auto aspect-auto object-contain mb-6"
        />
        <h1 className="h1">Are you ready to bloom?</h1>
        <p className="p-lead mt-4">
          Thoughtful branding, web design, and digital experiences inspired by nature.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="/#portfolio" className="btn btn-primary shadow" style={{boxShadow: "var(--brand-shadow)"}}>
            View Our Work
          </a>
          <a href="/contact" className="btn btn-secondary">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}
