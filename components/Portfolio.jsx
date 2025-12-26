export default function Portfolio({ cases = [] }) {
  const safe = Array.isArray(cases) ? cases : [];

  return (
    <section id="portfolio" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="h2">Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {safe.map((c) => (
            <a
              key={c.id}
              href={`/case/${c.slug}`}
              className="card card-hover hover:opacity-95 transition"
            >
              <div className="rounded-xl border border-sage/30 bg-[#EDF3EF] aspect-[4/3] overflow-hidden">
                {c.heroImageUrl ? (
                  <img
                    src={c.heroImageUrl}
                    alt={c.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
              </div>

              <div className="mt-4">
                <div className="text-xs bg-honey/60 px-2 py-1 rounded inline-block">
                  {c.tag ?? "Case study"}
                </div>
                <h3 className="mt-2 font-medium text-lg">{c.title}</h3>
                {c.summary ? (
                  <p className="mt-1 text-sm opacity-75">{c.summary}</p>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
