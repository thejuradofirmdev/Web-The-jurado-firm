"use client";

import { motion } from "framer-motion";
import { Landmark, Scale, Globe2 } from "lucide-react";

/**
 * 🏛️ MissionValues — Sección que detalla los pilares y filosofía de la firma.
 * Diseño optimizado con iconos vectoriales y efectos de elevación.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function MissionValues({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const values = [
    {
      icon: Landmark,
      title: isEs ? "Misión" : "Mission",
      desc: isEs
        ? "Reunir familias y proteger el sueño americano a través de estrategias legales personalizadas y vigorosas."
        : "Reuniting families and protecting the American dream through personalized and vigorous legal strategies.",
      accent: "gold",
    },
    {
      icon: Scale,
      title: isEs ? "Integridad" : "Integrity",
      desc: isEs
        ? "Transparencia legal absoluta. No hacemos falsas promesas; construimos realidades basadas en la ley."
        : "Absolute legal transparency. We make no false promises; we build realities based on the law.",
      accent: "navy",
    },
    {
      icon: Globe2,
      title: isEs ? "Conexión Cultural" : "Cultural Connection",
      desc: isEs
        ? "Bilingües, locales y 100% comprometidos con nuestras raíces. Hablamos tu idioma y sentimos tu historia."
        : "Bilingual, local and 100% committed to our roots. We speak your language and feel your story.",
      accent: "gold",
    },
  ];

  return (
    <section className="py-24 bg-[#fcfaf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-navy mb-6 font-bold"
          >
            {isEs ? "Nuestra Filosofía de Trabajo" : "Our Work Philosophy"}
          </motion.h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl mx-auto text-xl font-light"
          >
            {isEs
              ? "Combinamos la excelencia técnica con la calidez humana para ofrecer resultados que transforman vidas."
              : "We combine technical excellence with human warmth to deliver life-changing results."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[32px] shadow-xl shadow-navy/5 border border-gray-100 group hover:-translate-y-3 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background accent decor */}
              <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-700 ${v.accent === 'gold' ? 'bg-gold' : 'bg-navy'}`} />
              
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 shadow-lg ${v.accent === 'gold' ? 'bg-gold text-navy' : 'bg-navy text-white'}`}>
                <v.icon strokeWidth={1.5} className="w-10 h-10" />
              </div>
              
              <h3 className="font-serif text-3xl mb-6 text-navy font-bold">{v.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
