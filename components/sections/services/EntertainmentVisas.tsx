"use client";

import Image from "next/image";
import { Music, Film, PlaySquare, Mic2, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * 🎭 EntertainmentVisas — Sección especializada en visas para el sector de entretenimiento.
 * Diseño cinematográfico con alto contraste y enfoque en autoridad.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function EntertainmentVisas({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const talents = [
    { icon: Music, label: isEs ? "Músicos y Orquestas" : "Musicians & Orchestras" },
    { icon: Film, label: isEs ? "Actores y Directores" : "Actors & Directors" },
    { icon: PlaySquare, label: isEs ? "Influencers & YouTube" : "Influencers & YouTube" },
    { icon: Mic2, label: isEs ? "Locutores y Talento de Voz" : "Voice Talent & Dubbing" },
  ];

  return (
    <section className="bg-navy relative overflow-hidden py-32">
      {/* Fondo decorativo tech/luxury */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm54 24c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM57 6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM24 30c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23f7bd48\" fill-opacity=\"1\" fill-rule=\"evenodd\"%3E%3C/path%3E%3C/svg%3E')" }} />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Lado Izquierdo: Imagen Cinematográfica */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-3xl" />
          <div className="absolute top-6 left-6 w-full h-full border-2 border-gold/10 rounded-3xl" />
          
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqtZzUsuQJKO7qEO6B4nj_VkFwqysMRjywjf3N584Q0HRvo-lHOO5QxS8uSoD31dpSYCYEnar9_SvPXkhBIkMHTNvXRmIMvQidFKnyMYP0SXJXkJyegZauzJkCHGiXkcIbTCVCJ35LYc6_U0mBM4udNT174rhAwbPWH69kL0PlD4aYFQTXBGbljmjmWKbMw56TrD8if-k2D-iTdh1LhdxK0sijtYqe0T_fbY9UPMk3GpgSRPfUheCYip6E7OCMHiNyS_Sb377MjljK"
              alt="Entertainment Industry Professional"
              width={800}
              height={1000}
              className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
              unoptimized
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent pointer-events-none" />
          </div>

          {/* Badge flotante */}
          <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-[200px]">
            <Star className="w-8 h-8 text-gold mb-3 fill-gold" />
            <p className="text-white text-sm font-bold leading-snug">
              {isEs ? "Firma #1 para Visas O-1 en California" : "#1 Law Firm for O-1 Visas in California"}
            </p>
          </div>
        </motion.div>

        {/* Lado Derecho: Contenido */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 inline-block">
             {isEs ? "Talento Sin Fronteras" : "Talent Without Borders"}
          </span>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            {isEs
              ? <>Tu arte es global. <br /><span className="text-gold italic">Tu estatus también.</span></>
              : <>Your art is global. <br /><span className="text-gold italic">Your status too.</span></>}
          </h2>

          <p className="text-lg md:text-xl text-slate-300 font-light mb-12 leading-relaxed">
            {isEs
              ? "Desde nominados al Grammy hasta influencers de nueva generación. Protegemos tu carrera con estrategias legales diseñadas para la élite creativa."
              : "From Grammy nominees to next-gen influencers. We protect your career with legal strategies designed for the creative elite."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {talents.map((t, i) => (
              <div key={i} className="flex items-center gap-4 group/item">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover/item:bg-gold transition-colors duration-300">
                  <t.icon className="w-5 h-5 text-gold group-hover/item:text-navy" />
                </div>
                <span className="text-white font-semibold text-sm tracking-wide">{t.label}</span>
              </div>
            ))}
          </div>

          <button className="group flex items-center gap-4 text-gold font-bold text-lg hover:text-white transition-colors duration-300">
             <span className="border-b-2 border-gold/30 group-hover:border-white pb-1">
               {isEs ? "Inicia tu Petición de Artista" : "Start Your Artist Petition"}
             </span>
             <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
