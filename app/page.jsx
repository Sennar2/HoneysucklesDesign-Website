import { prisma } from "@/lib/prisma";

import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";

export const dynamic = "force-dynamic"; // avoids stale caching while you're building

export default async function Page() {
  const clients = await prisma.client.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      name: true,
      logoUrl: true,
      slug: true,
    },
  });

  const cases = await prisma.caseStudy.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      slug: true,
      title: true,
      tag: true,
      summary: true,
      heroImageUrl: true,
      results: true,
    },
  });

  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.1}>
        <LogoMarquee clients={clients} />
      </Reveal>

      <Reveal delay={0.15}>
        <Services />
      </Reveal>

      <Reveal delay={0.2}>
        <Portfolio cases={cases} />
      </Reveal>

      <Reveal delay={0.25}>
        <About />
      </Reveal>
    </>
  );
}
