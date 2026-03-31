import Link from "next/link";

/**
 * 🧩 ServicesGrid — 6 tarjetas de servicios con icon hover effect
 * Diseño del HTML de referencia: cards blancas con ícono que cambia color al hover
 */
export function ServicesGrid({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const services = [
    {
      icon: "👥",
      title: isEs ? "Reunificación Familiar" : "Family Reunification",
      desc: isEs
        ? "Peticiones para cónyuges, hijos, padres y hermanos. Traemos a su familia legalmente."
        : "Petitions for spouses, children, parents and siblings. We bring your family legally.",
      slug: "reunion-familiar",
    },
    {
      icon: "💼",
      title: isEs ? "Visas de Trabajo" : "Work Visas",
      desc: isEs
        ? "Asesoría en visas H-1B, L-1, O-1 y certificaciones laborales para empresas y empleados."
        : "Advice on H-1B, L-1, O-1 visas and labor certifications for companies and employees.",
      slug: "visas-trabajo",
    },
    {
      icon: "🪪",
      title: isEs ? "Ajuste de Estatus" : "Adjustment of Status",
      desc: isEs
        ? "Tramitación de la Residencia Permanente (Green Card) sin salir de los EE.UU."
        : "Processing of Permanent Residency (Green Card) without leaving the USA.",
      slug: "ajuste-estatus",
    },
    {
      icon: "🛡️",
      title: isEs ? "Defensa de Deportación" : "Removal Defense",
      desc: isEs
        ? "Representación agresiva ante la corte de inmigración para evitar la salida del país."
        : "Aggressive representation before immigration court to prevent deportation.",
      slug: "defensa-deportacion",
    },
    {
      icon: "🌿",
      title: isEs ? "Asilo Político" : "Political Asylum",
      desc: isEs
        ? "Protección para personas perseguidas en sus países de origen por raza, religión o política."
        : "Protection for people persecuted in their home countries for race, religion, or politics.",
      slug: "asilo",
    },
    {
      icon: "🏛️",
      title: isEs ? "Ciudadanía" : "Citizenship",
      desc: isEs
        ? "Acompañamiento completo en el proceso de naturalización y examen de civismo."
        : "Full support throughout the naturalization process and civics exam.",
      slug: "ciudadania",
    },
  ];

  return (
    <section className="py-28 px-8 bg-[#f2f4f7]" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-[#000d22] mb-4">
            {isEs ? "Nuestros Servicios Especializados" : "Our Specialized Services"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {isEs
              ? "Soluciones legales integrales diseñadas para proteger su estatus migratorio en los Estados Unidos."
              : "Comprehensive legal solutions designed to protect your immigration status in the United States."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={`/${locale}/servicios/${service.slug}`}
              className="bg-white p-10 rounded-2xl hover:shadow-xl transition-all group block"
            >
              <div className="w-14 h-14 bg-[#f2f4f7] rounded-xl flex items-center justify-center text-3xl mb-8 group-hover:bg-[#7b5800] transition-colors">
                <span>{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[#000d22] mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
