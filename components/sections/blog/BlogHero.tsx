"use client";

import Image from "next/image";
import { BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 📰 BlogHero — Header hero de la página de Blog (V2.1 - Full Background).
 * Consistente con el diseño global: fondo completo, gradiente de autoridad y alineación izquierda.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function BlogHero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <header className="relative min-h-[80vh] flex items-center overflow-hidden bg-navy text-white">
      {/* 🖼️ Imagen de Fondo Completa con Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8be93c537d97?auto=format&fit=crop&q=80"
          alt="Legacy law library"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay gradiente premium: Navy sólido a transparente */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 flex flex-col items-start pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block py-2 px-5 mb-8 text-xs font-bold tracking-[0.2em] uppercase bg-gold/20 text-gold rounded-full backdrop-blur-md border border-gold/30">
            {isEs ? "Educación y Actualidad" : "Education & News"}
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-extrabold text-white leading-tight mb-8">
            {isEs
              ? "Blog Legal — Tu Guía en el Camino"
              : "Legal Blog — Your Guide on the Journey"}
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light max-w-2xl mb-12 leading-relaxed">
            {isEs
              ? "Información clara, bilingüe y actualizada sobre leyes de inmigración en California para proteger a tu familia."
              : "Clear, bilingual, and updated information on immigration laws in California to protect your family."}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <BookOpen className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gold uppercase tracking-tighter">Knowledge Base</span>
                <span className="text-sm font-medium">Updated Weekly</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium text-white/80">Expert Insights</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
