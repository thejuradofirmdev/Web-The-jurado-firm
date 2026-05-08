"use client";

import Image from "next/image";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 🦸 AboutHero — Hero de la página Sobre Nosotros (V2.1 - Full Background).
 * Consistente con el diseño global: fondo completo, gradiente de autoridad y alineación izquierda.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function AboutHero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy text-white">
      {/* 🖼️ Imagen de Fondo Completa con Overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBmbYpzgjePWK7s0xzqlnZcWm6RTvn9MmIPmyoZ0AppingbifV1ADFRXfW1qyhYHYCRrnxYKux_DSbguD6KuRRTkG9g4n_J7veUe9ylVEsvyvNsWeaCelJa3Lue_3zOYXitC53SQU6zO8C0LxlJx5extWQQn4q9KwWW2XohtLUkSdr9OFVu0was08kHYWUvGe4GJPw6LXMUi-U4YoMlVhfPaWTPu0PlCG0dHVCnWFmSx8bND3RiZvusIhao6gUitKQ5duYN9xgvvSx"
          alt="High-end legal office interior"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay gradiente premium: Navy sólido a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start pt-32 pb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-2 px-5 rounded-full bg-gold/20 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-md border border-gold/30">
            {isEs ? "Misión y Trayectoria" : "Mission and Track Record"}
          </span>
          <h1 className="text-white font-serif text-5xl md:text-8xl font-extrabold leading-none mb-8">
            {isEs
              ? "Tu Historia es — Nuestra Misión"
              : "Your Story — Our Mission"}
          </h1>
          <p className="text-slate-300 text-xl md:text-3xl font-light leading-relaxed max-w-2xl mb-12">
            {isEs
              ? "Conoce el legado de Carlos Jurado y el equipo que protege el futuro de tu familia en California con integridad, autoridad y empatía."
              : "Meet Carlos Jurado's legacy and the team protecting your family's future in California with integrity, authority, and empathy."}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <button
              onClick={scrollToContact}
              className="px-12 py-6 bg-gold text-navy font-bold rounded-xl shadow-[0_15px_35px_rgba(247,189,72,0.3)] hover:scale-105 transition-all text-xl flex items-center group active:scale-95"
            >
              {isEs ? "CONOCER AL EQUIPO" : "MEET THE TEAM"}
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
