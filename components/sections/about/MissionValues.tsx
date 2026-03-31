/**
 * 🏛️ MissionValues — 3 valores clave de la firma
 * Cards con hover lift, iconos animados y borde superior de color
 */
export function MissionValues({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const values = [
    {
      icon: "🏛️",
      title: isEs ? "Misión" : "Mission",
      desc: isEs
        ? "Reunir familias y proteger el sueño americano a través de estrategias legales personalizadas y vigorosas."
        : "Reuniting families and protecting the American dream through personalized and vigorous legal strategies.",
      borderColor: "border-[#7b5800]",
      hoverBg: "group-hover:bg-[#7b5800]",
      hoverText: "group-hover:text-white",
      textColor: "text-[#7b5800]",
      bgColor: "bg-[#7b5800]/10",
    },
    {
      icon: "⚖️",
      title: isEs ? "Integridad" : "Integrity",
      desc: isEs
        ? "Transparencia legal absoluta. No hacemos falsas promesas; construimos realidades basadas en la ley."
        : "Absolute legal transparency. We make no false promises; we build realities based on the law.",
      borderColor: "border-[#000d22]",
      hoverBg: "group-hover:bg-[#000d22]",
      hoverText: "group-hover:text-white",
      textColor: "text-[#000d22]",
      bgColor: "bg-[#000d22]/10",
    },
    {
      icon: "🌎",
      title: isEs ? "Conexión Cultural" : "Cultural Connection",
      desc: isEs
        ? "Bilingües, locales y 100% comprometidos con nuestras raíces. Hablamos tu idioma y sentimos tu historia."
        : "Bilingual, local and 100% committed to our roots. We speak your language and feel your story.",
      borderColor: "border-[#7b5800]",
      hoverBg: "group-hover:bg-[#7b5800]",
      hoverText: "group-hover:text-white",
      textColor: "text-[#7b5800]",
      bgColor: "bg-[#7b5800]/10",
    },
  ];

  return (
    <section className="py-24 bg-[#f2f4f7]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#000d22] mb-4">
            {isEs ? "Nuestra Filosofía" : "Our Philosophy"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {isEs
              ? "Combinamos la excelencia técnica con la calidez humana para ofrecer resultados reales."
              : "We combine technical excellence with human warmth to deliver real results."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div
              key={idx}
              className={`bg-white p-10 rounded-2xl shadow-[0_40px_80px_-20px_rgba(4,28,56,0.08)] border-t-4 ${v.borderColor} group hover:-translate-y-2 transition-transform duration-300`}
            >
              <div
                className={`w-16 h-16 ${v.bgColor} ${v.textColor} rounded-full flex items-center justify-center mb-8 ${v.hoverBg} ${v.hoverText} transition-colors text-3xl`}
              >
                {v.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-[#000d22]">{v.title}</h3>
              <p className="text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
