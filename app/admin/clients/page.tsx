import { prisma } from "@/lib/prisma";
import ClientForm from "./ClientForm";

export const dynamic = "force-dynamic";

export default async function AdminClientsPage() {
  const clients = await prisma.client.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="h2 mb-6">Admin · Clients</h1>

      <ClientForm />

      <div className="mt-8 grid gap-3">
        {clients.map((c) => (
          <div key={c.id} className="card flex items-center justify-between">
            <div className="flex items-center gap-3">
              {c.logoUrl ? <img src={c.logoUrl} alt={c.name} className="h-8 w-auto" /> : null}
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-sm opacity-70">{c.slug}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
