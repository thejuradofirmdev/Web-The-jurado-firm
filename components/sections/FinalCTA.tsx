"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-28 px-6 tech-bg-gradient text-center overflow-hidden relative">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tech rounded-full mix-blend-screen filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 leading-tight"
        >
          {isEs
            ? "¿Tu familia o tu talento te trajo hasta aquí? Hagámoslo oficial."
            : "Did your family or your talent bring you here? Let's make it official."}
        </motion.h2>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8"
        >
          <Link
            href={`/${locale}#contacto`}
            className="group relative bg-gradient-to-r from-gold to-gold-dark text-navy px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-gold/20 transition-all flex items-center justify-center gap-3 overflow-hidden hover:scale-105 w-full sm:w-auto"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">{isEs ? "Iniciar Trámite Ahora" : "Start Process Now"}</span>
            <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="https://wa.me/18005705101"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 w-full sm:w-auto hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            {isEs ? "WhatsApp Directo" : "Direct WhatsApp"}
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/60 text-sm font-medium"
        >
           {isEs ? "✓ Sin cargos ocultos. Transparencia legal desde el día 1." : "✓ No hidden fees. Legal transparency from day 1."}
        </motion.p>
      </div>
    </section>
  );
}
