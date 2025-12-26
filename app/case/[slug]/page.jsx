import { prisma } from "@/lib/prisma";

export async function generateStaticParams() {
  const cases = await prisma.caseStudy.findMany({
    where: { publishedAt: { not: null } },
    select: { slug: true },
  });

  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const project = await prisma.caseStudy.findUnique({
    where: { slug: params.slug },
    select: { title: true, summary: true },
  });

  return {
    title: `${project?.title ?? "Case"} — Honeysuckles Design`,
    description: project?.summary ?? "Case study",
  };
}

export default async function CasePage({ params }) {
  const project = await prisma.caseStudy.findUnique({
    where: { slug: params.slug },
    select: {
      slug: true,
      title: true,
      tag: true,
      summary: true,
      results: true,
      heroImageUrl: true,
    },
  });

  if (!project) {
    return (
      <div className="section">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="h2">Not found</h1>
        </div>
      </div>
    );
  }

  const results = Array.isArray(project.results) ? project.results : [];

  return (
    <>
      <section className="bg-gradient-to-br from-[#F4E9C7] to-[#E7F0EC] border-b border-sage/20">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm text-softbrown/70">
              <a href="/">Home</a> · <a href="/#portfolio">Portfolio</a>
            </div>
            <h1 className="h1 mt-2">{project.title}</h1>
            <p className="p-lead mt-3">{project.summary}</p>
            {project.tag ? (
              <span className="inline-block mt-3 text-xs bg-honey/60 px-2 py-1 rounded">
                {project.tag}
              </span>
            ) : null}
          </div>

          <div className="rounded-2xl border border-sage/40 bg-white aspect-[4/3] overflow-hidden">
            {project.heroImageUrl ? (
              <img
                src={project.heroImageUrl}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="h2">The brief</h2>
            <p className="mt-2">
              We partnered with {project.title} to craft a nature-forward identity and a calm,
              accessible digital experience. Our goal: clarity, warmth, and an easy-to-scale system.
            </p>
          </div>

          <div className="card">
            <h2 className="h2">Deliverables</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Logo suite, color & type system</li>
              <li>Website & components (responsive)</li>
              <li>Guidelines and launch assets</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <div className="h-40 rounded-lg bg-[#EDF3EF] border border-sage/40 mb-2" />
            <p className="text-sm text-softbrown/70">Identity exploration</p>
          </div>
          <div className="card">
            <div className="h-40 rounded-lg bg-[#EDF3EF] border border-sage/40 mb-2" />
            <p className="text-sm text-softbrown/70">Web UI system</p>
          </div>
          <div className="card">
            <div className="h-40 rounded-lg bg-[#EDF3EF] border border-sage/40 mb-2" />
            <p className="text-sm text-softbrown/70">Packaging / mockups</p>
          </div>
        </div>

        <section className="card mt-6">
          <h2 className="h2">Results</h2>
          <ul className="list-disc pl-6 mt-2">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <div className="mt-3">
            <a href="/contact" className="btn btn-primary">
              Start your project
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
