import Link from "next/link";
import { POSTS } from "../../data/posts";
const fmt = new Intl.DateTimeFormat('en-US', { year:'numeric', month:'short', day:'numeric' });

export const metadata = { title: "Blog — Honeysuckles Design" };

export default function BlogIndex(){
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="h2 text-center">Studio Journal</h1>
        <p className="p-lead text-center mt-2">Notes on branding, design systems, and calm digital experiences.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {POSTS.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card hover:shadow-md transition">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="text-sm text-softbrown/70 mt-1">{fmt.format(new Date(p.date))}</p>
              <p className="mt-2">{p.excerpt}</p>
              <span className="inline-block mt-3 text-xs bg-honey/60 px-2 py-1 rounded">Read more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
