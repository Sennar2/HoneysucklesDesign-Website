import { prisma } from "@/lib/prisma";
import { saveCaseStudy } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminCaseStudiesPage() {
  const clients = await prisma.client.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  const cases = await prisma.caseStudy.findMany({
    orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
    include: { client: true },
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="h2 mb-6">Admin · Case studies</h1>

      <form action={saveCaseStudy} className="card grid gap-3">
        <div className="grid md:grid-cols-2 gap-3">
          <input name="title" placeholder="Title" className="input" />
          <input name="slug" placeholder="Slug (e.g. wildfern-tea)" className="input" />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <input name="tag" placeholder="Tag (e.g. Branding + Web)" className="input" />
          <input name="heroImageUrl" placeholder="Hero image URL (https://...)" className="input" />
        </div>

        <textarea name="summary" placeholder="Summary" className="input min-h-[90px]" />

        <textarea
          name="results"
          placeholder={"Results (one per line)\n35% lift...\nReduced bounce rate..."}
          className="input min-h-[120px]"
        />

        <div className="grid md:grid-cols-3 gap-3 items-center">
          <select name="clientId" className="input">
            <option value="">(No client)</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <input name="sortOrder" placeholder="Sort order" className="input" />

          <label className="flex items-center gap-2 text-sm opacity-80">
            <input type="checkbox" name="published" />
            Published
          </label>
        </div>

        <button className="btn btn-primary w-fit">Save case study</button>
      </form>

      <div className="mt-8 grid gap-3">
        {cases.map((cs) => (
          <a key={cs.id} href={`/case/${cs.slug}`} className="card flex justify-between gap-4">
            <div>
              <div className="font-medium">{cs.title}</div>
              <div className="text-sm opacity-70">
                /case/{cs.slug} {cs.client ? `· Client: ${cs.client.name}` : ""}{" "}
                {cs.publishedAt ? "· Published" : "· Draft"}
              </div>
            </div>
            <div className="text-sm opacity-70">{cs.tag}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
