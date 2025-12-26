export default function LogoMarquee({ clients = [] }) {
  const safe = Array.isArray(clients) ? clients : [];

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {safe
        .filter((c) => c && c.logoUrl)
        .map((c) => (
          <img
            key={c.id}
            src={c.logoUrl}
            alt={c.name}
            className="h-10 w-auto opacity-80"
            loading="lazy"
          />
        ))}
    </div>
  );
}
