import { saveClient } from "./actions";

export default function ClientForm() {
  return (
    <form action={saveClient} className="card mt-6 space-y-3">
      <input name="name" placeholder="Client name" className="w-full rounded-md border p-3" required />
      <input name="slug" placeholder="Slug (e.g. wildfern-tea)" className="w-full rounded-md border p-3" required />
      <input name="logoUrl" placeholder="Logo URL (https://...)" className="w-full rounded-md border p-3" />
      <input name="sortOrder" type="number" placeholder="Sort order" className="w-full rounded-md border p-3" defaultValue={0} />
      <button className="btn btn-primary w-full">Save client</button>
    </form>
  );
}
