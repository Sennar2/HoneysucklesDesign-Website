export default function About(){
  return (
    <section id="about" className="section bg-white">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="h2">Rooted in craft</h2>
          <p className="mt-4">
            At Honeysuckles Design, we believe beauty grows through simplicity and intention.
            We partner with thoughtful founders to create brands and digital experiences that feel
            calm, elegant, and unmistakably you.
          </p>
          <p className="mt-3">
            Our process is collaborative and transparent—from discovery and strategy, to sketches
            and prototypes, to polished launches on Vercel.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl border border-sage/40 bg-white aspect-[4/3]"></div>
        </div>
      </div>
    </section>
  );
}
