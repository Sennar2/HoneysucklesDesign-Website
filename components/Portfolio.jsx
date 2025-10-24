import { CASES } from "../data/cases";

export default function Portfolio(){
  return (
    <section id="portfolio" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="h2 text-center">Selected Work</h2>
        <p className="text-center p-lead mt-3 max-w-3xl mx-auto">A few projects that reflect our love for clarity, craft, and calm.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {CASES.map(p => (
            <a key={p.slug} className="card" href={`/case/${p.slug}`}>
              <div className="h-40 rounded-lg bg-[#EDF3EF] border border-sage/40 mb-4"></div>
              <h4 className="font-display text-xl">{p.title}</h4>
              <p className="mt-1">{p.summary}</p>
              <span className="inline-block mt-3 text-xs bg-honey/60 px-2 py-1 rounded">{p.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
