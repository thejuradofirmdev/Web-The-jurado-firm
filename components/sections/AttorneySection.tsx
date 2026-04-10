"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AttorneySection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-28 px-8 bg-premium overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* Foto del Abogado con Layout Asimétrico que sangra a la izquierda */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          {/* Decorative tech lines */}
          <div className="absolute top-10 -left-10 w-full h-full border border-navy/10 rounded-[32px] -z-10" />
          
          <div className="relative p-2 bg-white glass-card rounded-[32px] overflow-hidden">
            <Image
              src="/images/carlos-jurado.png"
              alt="Carlos Jurado Abogado de Inmigración"
              width={600}
              height={800}
              className="w-full h-auto object-cover object-top rounded-[24px]"
              unoptimized
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none rounded-[32px]" />
          </div>
        </motion.div>

        {/* Contenido (Neuromarketing: Bio Humana, Quote Destacado, Sin Membresías) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <span className="text-tech font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            {isEs ? "El Fundador" : "The Founder"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-8 leading-tight">
            Carlos Jurado — <br/>
            <span className="text-gold">{isEs ? "Tu Abogado, Tu Aliado." : "Your Attorney, Your Ally."}</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {isEs
              ? "Más de una década defendiendo historias reales. Entendemos que detrás de cada caso hay una familia, un sueño y un sacrificio. Nuestro enfoque es 100% humano y transparente: te hablamos con la verdad y luchamos con la ley de tu lado."
              : "Over a decade defending real stories. We understand that behind every case there is a family, a dream, and a sacrifice. Our approach is 100% human and transparent: we speak the truth and fight with the law on your side."}
          </p>

          {/* Quote Destacado (Fondo Navy, Playfair Itálica) */}
          <div className="relative p-8 rounded-2xl tech-bg-radial border border-white/10 shadow-xl overflow-hidden group">
            {/* Decorative quote icon */}
            <div className="absolute -top-4 -right-4 text-9xl text-white/5 font-serif leading-none group-hover:scale-110 transition-transform duration-500">
               "
            </div>
            
            <p className="relative z-10 text-xl md:text-2xl font-serif italic text-white leading-relaxed">
              {isEs 
                ? "«Tu estatus migratorio no define tu valor. Mi misión es darte la paz mental que tú y los tuyos merecen en este país.»"
                : "«Your immigration status does not define your worth. My mission is to give you the peace of mind you and your family deserve in this country.»"}
            </p>
            <div className="mt-6 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-gold" />
               <span className="text-gold font-bold uppercase tracking-wider text-sm">Carlos Jurado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
