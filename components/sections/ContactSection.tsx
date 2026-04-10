"use client";

import { LeadForm } from "@/components/sections/LeadForm";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const benefits = isEs ? [
    "Consulta gratuita y confidencial",
    "Respuesta en menos de 24 horas",
    "Atención 100% bilingüe (EN/ES)",
    "Abogados expertos que entienden tu cultura"
  ] : [
    "Free and confidential consultation",
    "Response in less than 24 hours",
    "100% bilingual support (EN/ES)",
    "Expert attorneys who understand your culture"
  ];

  return (
    <section className="relative py-24 tech-bg-gradient overflow-hidden" id="contacto">
      {/* Decorative tech grid / lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            {isEs ? "Da el Primer Paso Hoy" : "Take the First Step Today"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto font-light"
          >
            {isEs ? "Agenda tu evaluación inicial gratuita y sin compromiso." : "Schedule your free initial evaluation without commitment."}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Formulario (Izquierda) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <LeadForm locale={locale} />
          </motion.div>

          {/* Beneficios (Derecha) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 shadow-xl">
               <h3 className="text-2xl font-serif text-gold font-bold mb-8">
                 {isEs ? "¿Por qué elegir The Jurado Firm?" : "Why choose The Jurado Firm?"}
               </h3>
               
               <ul className="space-y-6">
                 {benefits.map((benefit, idx) => (
                   <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center gap-4 text-white/90 text-lg"
                    >
                     <div className="min-w-8 min-h-8 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                       <CheckCircle2 className="w-5 h-5 text-gold" />
                     </div>
                     <span>{benefit}</span>
                   </motion.li>
                 ))}
               </ul>

               <div className="mt-10 pt-8 border-t border-white/10">
                 <p className="text-white/60 italic text-sm">
                   {isEs ? "«Nuestra misión es mantener familias unidas y proteger tu futuro.»" : "«Our mission is to keep families together and protect your future.»"}
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
