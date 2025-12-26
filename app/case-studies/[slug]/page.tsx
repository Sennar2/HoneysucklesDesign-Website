import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const cs = await prisma.caseStudy.findUnique({
    where: { slug },
    include: {
      client: true,
    },
  });

  if (!cs) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center gap-4">
        {cs.client?.logoUrl ? (
          <img
            src={cs.client.logoUrl}
            alt={cs.client.name}
            className="h-10 w-auto opacity-90"
          />
        ) : null}
        <div className="text-sm opacity-70">{cs.tag}</div>
      </div>

      <h1 className="mt-6 font-display text-4xl text-charcoal">{cs.title}</h1>
      {cs.summary ? <p className="mt-4 text-lg opacity-80">{cs.summary}</p> : null}

      {Array.isArray(cs.results) && cs.results.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display text-xl text-charcoal">Results</h2>
          <ul className="mt-4 list-disc pl-6 opacity-80">
            {cs.results.map((r: string, i: number) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
