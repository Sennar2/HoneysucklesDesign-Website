"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveClient(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const logoUrl = String(formData.get("logoUrl") ?? "").trim() || null;
  const sortOrder = Number(formData.get("sortOrder") ?? 0);

  if (!name || !slug) throw new Error("name and slug required");

  await prisma.client.upsert({
    where: { slug },
    update: { name, logoUrl, sortOrder, isActive: true },
    create: { name, slug, logoUrl, sortOrder, isActive: true },
  });

  revalidatePath("/admin/clients");
  revalidatePath("/");
}
