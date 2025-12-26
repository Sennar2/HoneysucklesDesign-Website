const ServiceCard = ({ title, children, icon }) => (
  <div className="card text-center p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-brand transition-shadow">
    <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="font-display text-2xl text-charcoal">{title}</h3>
    <p className="mt-2">{children}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="h2 text-center text-charcoal">Services</h2>
        <p className="text-center p-lead mt-3 max-w-3xl mx-auto">
          From identity systems to polished web apps, we craft visuals and code that help your brand bloom.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ServiceCard title="Branding" icon="/icons/icon_branding.png">
            Logo suites, color & type systems, brand strategy, style guides, templates, and packaging.
          </ServiceCard>
          <ServiceCard title="Web Design & UI/UX" icon="/icons/icon_web_design.png">
            Responsive websites, design systems, component libraries, and accessible, user-first interfaces.
          </ServiceCard>
          <ServiceCard title="Web Development" icon="/icons/icon_development.png">
            Fast, SEO-friendly sites & web apps built with Next.js on Vercel. CMS options (Notion, Sanity, WordPress).
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
