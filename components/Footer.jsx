export default function Footer(){
  return (
    <footer className="bg-sage text-white mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-display text-2xl">Honeysuckles Design</h4>
          <p className="mt-3 opacity-90">Thoughtful branding, web design, and digital experiences inspired by nature.</p>
        </div>
        <div>
          <h5 className="uppercase tracking-wider opacity-90">Explore</h5>
          <ul className="mt-3 space-y-2 opacity-90">
            <li><a href="/#services" className="hover:underline">Services</a></li>
            <li><a href="/#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/#about" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase tracking-wider opacity-90">Get in touch</h5>
          <p className="mt-3 opacity-90">hello@honeysuckles.design</p>
          <p className="opacity-90">Instagram · Behance</p>
        </div>
      </div>
      <div className="text-center py-4 bg-sage/90">© {new Date().getFullYear()} Honeysuckles Design. All rights reserved.</div>
    </footer>
  );
}
