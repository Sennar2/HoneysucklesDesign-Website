import { CLIENTS } from "../data/clients";

export default function LogoMarquee(){
  return (
    <div className="overflow-hidden border-y border-sage/25 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="marquee-track flex gap-10 items-center">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <a key={i} href={`/case/${c.slug}`} title={c.name}>
              <img src={c.file} alt={`${c.name} logo`} className="h-10 opacity-85 grayscale hover:grayscale-0 transition" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
