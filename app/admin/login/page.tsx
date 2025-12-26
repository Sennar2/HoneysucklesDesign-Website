"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/login", { method: "POST", body: form });
    if (!res.ok) setError("Invalid credentials");
    else window.location.href = "/admin";
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <form onSubmit={onSubmit} className="card w-full max-w-sm space-y-4">
        <h1 className="font-display text-2xl text-charcoal">Admin Login</h1>
        <input name="email" type="email" placeholder="Email" className="w-full rounded-md border p-3" />
        <input name="password" type="password" placeholder="Password" className="w-full rounded-md border p-3" />
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button className="btn btn-primary w-full">Sign in</button>
      </form>
    </div>
  );
}
