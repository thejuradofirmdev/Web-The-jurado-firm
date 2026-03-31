/**
 * 🏅 TrustBar — Barra de confianza con íconos circulares
 * Diseño del HTML de referencia: círculos blancos con sombra + texto debajo
 */
export function TrustBar({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const items = [
    {
      icon: "🌐",
      label: isEs ? "Atención Bilingüe" : "Bilingual Attention",
    },
    {
      icon: "👨‍👩‍👧",
      label: isEs ? "Reunificación Familiar" : "Family Reunification",
    },
    {
      icon: "⚖️",
      label: "State Bar of California",
    },
    {
      icon: "📞",
      label: isEs ? "Soporte Telefónico" : "Phone Support",
    },
    {
      icon: "⭐",
      label: "Google 5.0",
    },
  ];

  return (
    <section className="bg-[#f2f4f7] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-[#191c1e]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
