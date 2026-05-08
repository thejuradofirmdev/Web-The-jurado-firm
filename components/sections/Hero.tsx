"use client";

import Link from "next/link";
import { Phone, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 🦸 Hero — The Jurado Firm (V2.1 - Full Background)
 * Diseño optimizado: Imagen completa de fondo, gradiente de autoridad y neuromarketing.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function Hero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  // Split text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };

  const titleText = isEs
    ? "Tu familia o tu carrera merecen cruzar fronteras."
    : "Your family or your career deserve to cross borders.";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy text-white">
      {/* 🖼️ Imagen de Fondo Completa con Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/carlos-jurado-new.jpg')",
          }}
        />
        {/* Overlay gradiente premium para legibilidad: Navy sólido a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start pt-32 pb-24">
        {/* Badge Flotante Animado */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 py-2 px-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white text-sm font-medium mb-10 shadow-2xl"
        >
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="tracking-wide">
            Google 5.0 Rating — Elite Experts
          </span>
        </motion.div>

        {/* H1 Combinado con Split Text */}
        <h1 className="text-5xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 max-w-4xl">
          {titleText.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants as any}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl lg:text-2xl text-slate-200 font-light leading-relaxed mb-12 max-w-2xl"
        >
          {isEs
            ? "Abogados de inmigración bilingües en California. Expertos en reunificación familiar y visas de entretenimiento con un enfoque 100% humano."
            : "Bilingual immigration attorneys in California. Experts in family reunification and entertainment visas with a 100% human approach."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mb-8 w-full sm:w-auto"
        >
          <Link
            href={`/${locale}#contacto`}
            className="group relative bg-gold text-navy px-10 py-5 rounded-xl font-bold transition-all shadow-[0_10px_30px_rgba(247,189,72,0.3)] text-center overflow-hidden hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative text-lg">
              {isEs
                ? "Agenda tu Consulta Gratuita"
                : "Schedule Your Free Consultation"}
            </span>
          </Link>
          <a
            href="tel:18005705101"
            className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold transition-all flex items-center justify-center gap-3 hover:scale-105"
          >
            <Phone className="h-5 w-5 text-gold" />
            <span className="text-lg">
              {isEs ? "Llamar ahora" : "Call now"}
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-3 text-white/50 text-sm italic"
        >
          <BadgeCheck className="w-4 h-4 text-gold" />
          {isEs
            ? "Confidencialidad garantizada bajo el privilegio abogado-cliente."
            : "Confidentiality guaranteed under attorney-client privilege."}
        </motion.div>
      </div>
    </section>
  );
}
