"use client";

import { Star, BadgeCheck, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 🦸 ServicesHero — Hero rediseñado para la página de Servicios (V2.1 - Full Background).
 * Consistente con el diseño global: fondo completo, gradiente de autoridad y alineación izquierda.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function ServicesHero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy text-white">
      {/* 🖼️ Imagen de Fondo Completa con Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')",
          }}
        />
        {/* Overlay gradiente premium: Navy sólido a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start pt-32 pb-24">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl"
        >
          <span className="inline-block py-2 px-5 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-md border border-gold/30">
            {isEs ? "Servicios Legales Integrados" : "Integrated Legal Services"}
          </span>
          
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white leading-tight mb-8">
            {isEs
              ? "Estrategias Legales Que Transforman Vidas"
              : "Legal Strategies That Transform Lives"}
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed mb-12 max-w-2xl">
            {isEs
              ? <>Desde visas de talento extraordinario hasta defensa contra deportación. Navegamos la complejidad migratoria con <span className="text-gold font-semibold italic">autoridad</span> por ti.</>
              : <>From extraordinary talent visas to removal defense. We navigate immigration complexity with <span className="text-gold font-semibold italic">authority</span> for you.</>}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <button 
              onClick={scrollToContact}
              className="px-12 py-6 bg-gold text-navy font-bold rounded-xl shadow-[0_15px_35px_rgba(247,189,72,0.3)] hover:scale-105 transition-all text-xl flex items-center group active:scale-95"
            >
              {isEs ? "INICIAR EVALUACIÓN" : "START EVALUATION"}
              <ArrowDown className="ml-3 w-6 h-6 group-hover:translate-y-2 transition-transform" />
            </button>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center space-x-3 text-white">
                <Star className="h-6 w-6 fill-gold text-gold" />
                <span className="text-base font-medium">Google 5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <BadgeCheck className="h-6 w-6 text-gold" />
                <span className="text-base font-medium">State Bar Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
