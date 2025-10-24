import Image from "next/image";
import Link from "next/link";

export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sage/25">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Honeysuckles Design logo" width={40} height={40} priority />
          <span className="font-display text-xl tracking-wide">Honeysuckles Design</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-softbrown/80">
          <Link href="/#services" className="hover:text-softbrown">Services</Link>
          <Link href="/#portfolio" className="hover:text-softbrown">Portfolio</Link>
          <Link href="/#about" className="hover:text-softbrown">About</Link>
          <Link href="/blog" className="hover:text-softbrown">Blog</Link>
          <Link href="/contact" className="btn btn-primary">Start Your Project</Link>
        </nav>
      </div>
    </header>
  );
}
