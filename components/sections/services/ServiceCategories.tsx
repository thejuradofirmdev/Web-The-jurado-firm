"use client";

import { motion } from "framer-motion";
import { Users2, Briefcase, Palette, Sprout, ArrowRight, Star } from "lucide-react";

/**
 * 🧩 ServiceCategories — Sección que categoriza los servicios legales principales.
 * Diseño optimizado con efectos premium y animaciones Framer Motion.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function ServiceCategories({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const categories = [
    {
      id: "family",
      icon: Users2,
      color: "navy",
      title: isEs ? "Inmigración Familiar" : "Family Immigration",
      desc: isEs
        ? "Reunimos familias separadas por fronteras con procesos humanos y eficientes."
        : "We reunite families separated by borders with human and efficient processes.",
      items: isEs
        ? ["Peticiones de Cónyuge e Hijos", "Perdones Migratorios", "Visa de Prometido K-1"]
        : ["Spouse and Child Petitions", "Immigration Waivers", "Fiancé K-1 Visa"],
      featured: false,
    },
    {
      id: "professional",
      icon: Briefcase,
      color: "navy",
      title: isEs ? "Visas Profesionales" : "Professional Visas",
      desc: isEs
        ? "Para graduados y especialistas bajo tratados como USMCA / TN."
        : "For graduates and specialists under treaties like USMCA / TN.",
      items: isEs
        ? ["Visa TN: México/Canadá", "Visa H-1B: Especialidades", "EB-2 / EB-3 Residencia"]
        : ["TN Visa: Mexico/Canada", "H-1B Visa: Specialties", "EB-2 / EB-3 Residency"],
      featured: false,
    },
    {
      id: "artist",
      icon: Palette,
      color: "gold",
      title: isEs ? "Talento y Entretenimiento" : "Talent & Entertainment",
      desc: isEs
        ? "Especialidad exclusiva para artistas, músicos e influencers de alto nivel."
        : "Exclusive specialty for high-level artists, musicians, and influencers.",
      items: isEs
        ? ["Visa O-1: Habilidades Extra", "Visa P-1: Atletas", "Visa P-3: Arte Cultural"]
        : ["O-1 Visa: Extra Ability", "P-1 Visa: Athletes", "P-3 Visa: Cultural Art"],
      featured: true,
      badge: isEs ? "ESPECIALIDAD DE ÉLITE" : "ELITE SPECIALTY",
    },
    {
      id: "agricultural",
      icon: Sprout,
      color: "navy",
      title: isEs ? "Laboral Agrícola" : "Agricultural Labor",
      desc: isEs
        ? "Apoyo estratégico para trabajadores de campo y servicios temporales."
        : "Strategic support for fieldworkers and temporary services.",
      items: isEs
        ? ["Visa H-2A: Trabajadores Agrícolas", "Certificaciones para Ranchos", "Renovaciones de Estatus"]
        : ["H-2A Visa: Farm Workers", "Ranch Certifications", "Status Renewals"],
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden" id="categorias">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold text-navy mb-6"
          >
            {isEs ? "Dominios de Excelencia" : "Domains of Excellence"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            {isEs
              ? "Más de una década unificando familias y trayectorias profesionales con precisión legal de élite."
              : "More than a decade unifying families and professional careers with elite legal precision."}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              variants={cardVariants}
              className={`relative group p-10 rounded-3xl transition-all duration-500 flex flex-col h-full
                ${cat.featured 
                  ? "bg-navy text-white shadow-2xl shadow-gold/20 ring-1 ring-gold/20" 
                  : "bg-premium/40 hover:bg-white hover:shadow-2xl border border-transparent hover:border-gray-100"
                }`}
            >
              {cat.featured && cat.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1.5 rounded-full font-bold text-[10px] tracking-widest uppercase z-10 shadow-lg flex items-center gap-2">
                  <Star className="w-3 h-3 fill-navy" />
                  {cat.badge}
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                ${cat.featured ? "bg-gold text-navy" : "bg-navy text-white shadow-lg shadow-navy/10"}`}>
                <cat.icon strokeWidth={1.5} className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-serif font-bold mb-4">{cat.title}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${cat.featured ? "text-slate-300" : "text-gray-500"}`}>
                {cat.desc}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${cat.featured ? "bg-gold" : "bg-navy"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-auto flex items-center justify-center gap-2
                ${cat.featured 
                  ? "bg-gold text-navy hover:bg-gold/90 shadow-lg shadow-gold/20" 
                  : "border-2 border-navy text-navy hover:bg-navy hover:text-white"}`}>
                {isEs ? "Más Información" : "Learn More"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
