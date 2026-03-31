/**
 * 🏅 ServicesTrustBar — Barra de confianza horizontal de la página de Servicios
 */
export function ServicesTrustBar({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const items = [
    { icon: "🌐", label: isEs ? "Atención Bilingüe" : "Bilingual Attention" },
    { icon: "👨‍👩‍👧", label: isEs ? "Reunificación Familiar" : "Family Reunification" },
    { icon: "⚖️", label: "State Bar of California" },
    { icon: "📞", label: isEs ? "Soporte Telefónico" : "Phone Support" },
  ];

  return (
    <aside className="hidden md:flex justify-center items-center py-8 px-12 space-x-12 w-full bg-white shadow-lg relative z-10 rounded-xl max-w-6xl mx-auto -mt-8">
      <div className="flex flex-col border-r border-slate-100 pr-8">
        <span className="text-xs font-bold text-[#7b5800] uppercase tracking-tighter">Trust Indicators</span>
        <span className="text-sm text-gray-500">Verified Authority</span>
      </div>
      <div className="flex items-center space-x-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-gray-500 hover:text-[#7b5800] transition-colors">
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
        <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform">
          <span>⭐</span>
          <span className="text-sm font-bold uppercase tracking-wide">Google 5.0</span>
        </div>
      </div>
    </aside>
  );
}
