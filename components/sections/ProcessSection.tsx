"use client";

import { motion } from "framer-motion";
import { ClipboardList, Search, FileSignature, CheckCircle, Scale } from "lucide-react";

/**
 * Componente que visualiza el proceso legal paso a paso.
 * Utiliza una línea temporal horizontal en escritorio y vertical en móviles.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function ProcessSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const steps = [
    {
      n: 1,
      icon: ClipboardList,
      title: isEs ? "Evaluación Inicial" : "Initial Evaluation",
      desc: isEs ? "Analizamos la viabilidad de su caso detalladamente." : "We analyze the viability of your case in detail.",
    },
    {
      n: 2,
      icon: Search,
      title: isEs ? "Recopilación" : "Collection",
      desc: isEs ? "Reunimos todas las pruebas y evidencias necesarias." : "We gather all necessary evidence and proof.",
    },
    {
      n: 3,
      icon: FileSignature,
      title: isEs ? "Preparación" : "Preparation",
      desc: isEs ? "Estructuramos un expediente legal sólido y estratégico." : "We structure a solid and strategic legal case file.",
    },
    {
      n: 4,
      icon: CheckCircle,
      title: isEs ? "Presentación" : "Submission",
      desc: isEs ? "Entregamos su caso ante USCIS o la Corte puntualmente." : "We submit your case to USCIS or the Court on time.",
    },
    {
      n: 5,
      icon: Scale,
      title: isEs ? "Aprobación" : "Approval",
      desc: isEs ? "Le preparamos para el éxito final en su entrevista." : "We prepare you for final success in your interview.",
    },
  ];

  return (
    <section className="py-28 px-4 md:px-8 bg-[#fcfaf7] overflow-hidden relative" id="proceso">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-premium/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6"
          >
            {isEs ? "Tu Camino hacia la Aprobación" : "Your Path to Approval"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            {isEs
              ? "Un proceso transparente y metódico, diseñado para minimizar tu estrés y maximizar tus probabilidades de éxito."
              : "A transparent and methodical process designed to minimize your stress and maximize your chances of success."}
          </motion.p>
        </div>

        <div className="relative">
          {/* Línea conectora Desktop */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-100 hidden lg:block">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-navy via-gold/50 to-navy" 
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8">
             {steps.map((step, idx) => (
                <motion.div 
                  key={step.n} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative flex flex-col items-center text-center lg:items-center group"
                >
                  {/* Círculo con Icono y Número */}
                  <div className="relative z-20 mb-8 w-24 h-24">
                    {/* Contenedor principal con overflow-hidden para el efecto de fondo */}
                    <div className="w-full h-full rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-xl group-hover:border-gold transition-all duration-500 group-hover:shadow-gold/10 relative overflow-hidden">
                      {/* Efecto hover fondo */}
                      <span className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      
                      <step.icon className="w-8 h-8 text-navy relative z-10 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    {/* Badge numérico fuera del overflow-hidden */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-sm border-4 border-white z-30 shadow-md">
                      {step.n}
                    </div>
                    
                    {/* Línea conectora Mobile (Vertical) */}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gray-100 lg:hidden" />
                    )}
                  </div>

                  <h4 className="text-xl font-bold font-serif text-navy mb-3 group-hover:text-navy/80 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    {step.desc}
                  </p>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
