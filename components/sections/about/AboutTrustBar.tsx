/**
 * 🏅 AboutTrustBar — Barra de trust horizontal flotante
 * Diseño del HTML de referencia: iconos con divisores, card amber destacada
 */
export function AboutTrustBar({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const items = [
    { icon: "🌐", label: isEs ? "Atención Bilingüe" : "Bilingual Attention" },
    { icon: "👨‍👩‍👧", label: isEs ? "Reunificación Familiar" : "Family Reunification" },
    { icon: "📞", label: isEs ? "Soporte Telefónico" : "Phone Support" },
    { icon: "⭐", label: "Google 5.0", featured: false },
  ];

  return (
    <div className="hidden md:flex justify-center items-center py-10 px-12 space-x-8 w-full bg-white rounded-xl mx-auto max-w-6xl -mt-16 relative z-20 shadow-[0_40px_80px_-20px_rgba(4,28,56,0.08)]">
      {/* State Bar destacado */}
      <div className="flex flex-col items-center gap-2 bg-amber-50 text-amber-700 p-4 rounded-lg">
        <span className="text-2xl">⚖️</span>
        <span className="font-medium text-sm">State Bar of California</span>
      </div>

      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-8">
          <div className="h-8 w-px bg-[#e0e3e6]" />
          <div className="flex flex-col items-center gap-2 cursor-default">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-gray-500 font-medium text-sm">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
