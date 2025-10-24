export async function POST(request){
  const body = await request.json();
  console.log("New inquiry:", body); // Replace with your email service
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
