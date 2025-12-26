export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream">
      <div className="border-b border-sage/30 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-display text-xl text-charcoal">Honeysuckles Admin</div>
          <form action="/api/admin/logout" method="post">
            <button className="text-sm underline underline-offset-4">Logout</button>
          </form>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
