import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const fd = await req.formData();
  const email = String(fd.get("email") ?? "");
  const password = String(fd.get("password") ?? "");

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
