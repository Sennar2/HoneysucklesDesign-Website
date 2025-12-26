"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function parseResults(input: string) {
  return input
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function saveCaseStudy(formData: FormData) {
  const slug = String(formData.get("slug") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const tag = String(formData.get("tag") || "").trim() || null;
  const summary = String(formData.get("summary") || "").trim() || null;
  const heroImageUrl = String(formData.get("heroImageUrl") || "").trim() || null;
  const resultsText = String(formData.get("results") || "");
  const clientId = String(formData.get("clientId") || "").trim() || null;
  const published = String(formData.get("published") || "") === "on";
  const sortOrder = Number(formData.get("sortOrder") || 0);

  if (!slug || !title) throw new Error("slug and title are required");

  await prisma.caseStudy.upsert({
    where: { slug },
    update: {
      title,
      tag,
      summary,
      heroImageUrl,
      results: parseResults(resultsText),
      clientId,
      publishedAt: published ? new Date() : null,
      sortOrder,
    },
    create: {
      slug,
      title,
      tag,
      summary,
      heroImageUrl,
      results: parseResults(resultsText),
      clientId,
      publishedAt: published ? new Date() : null,
      sortOrder,
    },
  });

  revalidatePath("/");
  revalidatePath(`/case/${slug}`);
  revalidatePath("/admin/case-studies");
}
