export default function AdminHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <a className="card card-hover" href="/admin/clients">
        <div className="font-display text-xl text-charcoal">Clients</div>
        <p className="mt-2 opacity-80">Manage logo strip + links</p>
      </a>
      <a className="card card-hover" href="/admin/case-studies">
        <div className="font-display text-xl text-charcoal">Case Studies</div>
        <p className="mt-2 opacity-80">Create/edit portfolio items</p>
      </a>
    </div>
  );
}
