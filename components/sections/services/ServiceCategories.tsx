import Link from "next/link";

/**
 * 🧩 ServiceCategories — 4 categorías de servicios legales
 * Family | Professional Blue | Artist Gold (starred) | Agricultural Green
 */
export function ServiceCategories({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const categories = [
    {
      color: "#7b5800",
      bgColor: "bg-[#f2f4f7]",
      icon: "👨‍👩‍👧",
      title: isEs ? "Inmigración Familiar" : "Family Immigration",
      desc: isEs
        ? "Reunimos familias separadas por fronteras con procesos eficientes y humanos."
        : "We reunite families separated by borders with efficient and humane processes.",
      items: isEs
        ? ["Petición de Cónyuge e Hijos", "Padres y Hermanos", "Ajuste de Estatus", "Visa de Prometido K-1"]
        : ["Spouse and Children Petition", "Parents and Siblings", "Adjustment of Status", "Fiancé K-1 Visa"],
      btnLabel: isEs ? "Consultar Familia" : "Family Inquiry",
      href: `/${locale}#contacto`,
      accent: "#7b5800",
      featured: false,
    },
    {
      color: "#000d22",
      bgColor: "bg-[#f2f4f7]",
      icon: "💼",
      title: isEs ? "Profesional Blue" : "Professional Blue",
      desc: isEs
        ? "Para graduados y especialistas bajo tratados internacionales como USMCA."
        : "For graduates and specialists under international treaties like USMCA.",
      items: isEs
        ? ["Visa H-1B: Especialidades", "Visa TN: México/Canadá", "EB-2 / EB-3: Residencia"]
        : ["H-1B Visa: Specialties", "TN Visa: Mexico/Canada", "EB-2 / EB-3: Residency"],
      btnLabel: isEs ? "Evaluar mi caso" : "Evaluate my case",
      href: `/${locale}#contacto`,
      accent: "#000d22",
      featured: false,
    },
    {
      color: "#7b5800",
      bgColor: "bg-white ring-1 ring-[#7b5800]/10 border-t-8 border-[#7b5800] shadow-xl",
      icon: "🎨",
      title: isEs ? "Artist Gold" : "Artist Gold",
      desc: isEs
        ? "Especialidad exclusiva para artistas de trayectoria, músicos y creadores."
        : "Exclusive specialty for established artists, musicians and creators.",
      items: isEs
        ? ["Visa O-1: Habilidades Extraordinarias", "Visa P-1: Atletas y Entretenimiento", "Visa P-3: Intercambio Cultural"]
        : ["O-1 Visa: Extraordinary Abilities", "P-1 Visa: Athletes and Entertainment", "P-3 Visa: Cultural Exchange"],
      btnLabel: isEs ? "Consulta de Artista" : "Artist Inquiry",
      href: `/${locale}#contacto`,
      accent: "#7b5800",
      featured: true,
      badge: isEs ? "ESPECIALIDAD FIRMA" : "FIRM SPECIALTY",
    },
    {
      color: "#005226",
      bgColor: "bg-[#f2f4f7]",
      icon: "🌿",
      title: isEs ? "Agricultural Green" : "Agricultural Green",
      desc: isEs
        ? "Apoyo a trabajadores de campo y servicios temporales no profesionales."
        : "Support for fieldworkers and temporary non-professional services.",
      items: isEs
        ? ["Visa H-2A: Trabajadores Agrícolas", "Visa H-2B: Servicios Temporales"]
        : ["H-2A Visa: Agricultural Workers", "H-2B Visa: Temporary Services"],
      btnLabel: isEs ? "Evaluar mi caso" : "Evaluate my case",
      href: `/${locale}#contacto`,
      accent: "#005226",
      featured: false,
    },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="categorias">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#000d22] mb-6">
          {isEs ? "Categorías de Servicios" : "Service Categories"}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          {isEs
            ? "Unificando familias y trayectorias profesionales con autoridad legal y empatía."
            : "Unifying families and professional careers with legal authority and empathy."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`group ${cat.bgColor} p-8 rounded-xl transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col`}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-md"
              style={{ backgroundColor: cat.accent, color: "white" }}
            >
              {cat.icon}
            </div>

            {/* Title + Badge */}
            <h3
              className="text-xl font-serif font-bold mb-2"
              style={{ color: cat.featured ? cat.accent : "#000d22" }}
            >
              {cat.title}
            </h3>

            {cat.featured && cat.badge && (
              <span className="text-[9px] font-bold text-[#5d4200] bg-[#ffdea6] px-2 py-0.5 rounded-full mb-4 inline-block self-start">
                {cat.badge}
              </span>
            )}

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">{cat.desc}</p>

            {/* Lista */}
            <ul className="space-y-2 mb-8 flex-grow">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center space-x-2 text-xs font-medium">
                  <span
                    className={cat.featured ? "text-base" : "w-1 h-1 rounded-full inline-block"}
                    style={cat.featured ? { color: cat.accent } : { backgroundColor: cat.accent }}
                  >
                    {cat.featured ? "⭐" : ""}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={cat.href}
              className="w-full py-3 rounded-lg font-bold text-[10px] uppercase tracking-wider text-center transition-all block"
              style={
                cat.featured
                  ? { backgroundColor: cat.accent, color: "white" }
                  : { border: `2px solid ${cat.accent}`, color: cat.accent }
              }
            >
              {cat.btnLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
