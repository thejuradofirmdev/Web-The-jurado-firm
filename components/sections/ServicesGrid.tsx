"use client";

import { useState } from "react";
import { Users, Briefcase, FileCheck2, ShieldAlert, Globe2, Landmark, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Componente que muestra una cuadrícula de servicios legales.
 * Permite abrir un modal con información detallada de cada servicio.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function ServicesGrid({ locale }: { locale: string }) {
  const isEs = locale === "es";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedService, setSelectedService] = useState<Record<string, any> | null>(null);

  const services = [
    {
      id: "reunion-familiar",
      icon: Users,
      title: isEs ? "Reunificación Familiar" : "Family Reunification",
      desc: isEs
        ? "No dejes que un error en tu solicitud retrase tu reunificación. Te guiamos paso a paso."
        : "Don't let a mistake in your application delay your reunification. We guide you step by step.",
      details: isEs 
        ? "Especialistas en peticiones I-130, procesos consulares y perdones migratorios. Nos aseguramos de que cada documento sea perfecto para que tu familia esté junta lo antes posible."
        : "Specialists in I-130 petitions, consular processing, and immigration waivers. We ensure every document is perfect so your family can be together as soon as possible.",
      bullets: isEs
        ? ["Peticiones de Cónyuges e Hijos", "Peticiones de Padres y Hermanos", "Perdones I-601 e I-601A", "Procesamiento Consular"]
        : ["Spouse and Child Petitions", "Parent and Sibling Petitions", "I-601 & I-601A Waivers", "Consular Processing"]
    },
    {
      id: "visas-trabajo",
      icon: Briefcase,
      title: isEs ? "Visas de Talento y Trabajo" : "Talent and Work Visas",
      desc: isEs
        ? "Visas O-1, P y H-1B protegidas. Un proceso impecable para quienes vienen a triunfar."
        : "Protected O-1, P, and H-1B visas. A flawless process for those who come to succeed.",
      details: isEs
        ? "Damos soporte a artistas, deportistas y profesionales altamente calificados. Nuestra estrategia maximiza tu perfil para cumplir con los estándares de USCIS."
        : "We support artists, athletes, and highly skilled professionals. Our strategy maximizes your profile to meet USCIS standards.",
      bullets: isEs
        ? ["Visas O-1 (Habilidades Extraordinarias)", "Visas P para Artistas y Atletas", "Visas H-1B y L-1", "Certificaciones Laborales"]
        : ["O-1 Visas (Extraordinary Ability)", "P Visas for Artists & Athletes", "H-1B and L-1 Visas", "Labor Certifications"]
    },
    {
      id: "ajuste-estatus",
      icon: FileCheck2,
      title: isEs ? "Ajuste de Estatus" : "Adjustment of Status",
      desc: isEs
        ? "Evita riesgos innecesarios. Gestionamos tu Green Card dentro de los EE.UU."
        : "Avoid unnecessary risks. We manage your Green Card from within the USA.",
      details: isEs
        ? "Te ayudamos a navegar el proceso de obtención de la residencia permanente sin salir de los Estados Unidos, analizando cada detalle de tu entrada y estatus actual."
        : "We help you navigate the process of obtaining permanent residency without leaving the United States, analyzing every detail of your entry and current status.",
      bullets: isEs
        ? ["Residencia por Matrimonio", "Ajuste de Estatus por Empleo", "Permisos de Trabajo y Viaje", "Entrevistas de Residencia"]
        : ["Marriage-based Residency", "Employment-based Adjustment", "Work and Travel Permits", "Residency Interviews"]
    },
    {
      id: "defensa-deportacion",
      icon: ShieldAlert,
      title: isEs ? "Defensa de Deportación" : "Removal Defense",
      desc: isEs
        ? "Cada día cuenta. Representación agresiva y estratégica ante la corte de inmigración."
        : "Every day counts. Aggressive and strategic representation before immigration court.",
      details: isEs
        ? "Defendemos tus derechos ante los tribunales de inmigración. Analizamos todas las opciones de alivio disponibles, como la cancelación de remoción y fianza."
        : "We defend your rights before immigration courts. We analyze all available relief options, such as cancellation of removal and bond hearings.",
      bullets: isEs
        ? ["Representación en Corte de Inmigración", "Mociones de Reapertura", "Bonos de Fianza", "Cancelación de Remoción"]
        : ["Immigration Court Representation", "Motions to Reopen", "Bond Hearings", "Cancellation of Removal"]
    },
    {
      id: "asilo",
      icon: Globe2,
      title: isEs ? "Asilo Político" : "Political Asylum",
      desc: isEs
        ? "Tu seguridad es primordial. Construimos casos sólidos para proteger tu vida."
        : "Your safety is paramount. We build solid cases to protect your life.",
      details: isEs
        ? "Preparamos solicitudes de asilo detalladas basadas en persecución por raza, religión, nacionalidad, opinión política o grupo social particular."
        : "We prepare detailed asylum applications based on persecution due to race, religion, nationality, political opinion, or membership in a particular social group.",
      bullets: isEs
        ? ["Asilo Afirmativo", "Asilo Defensivo", "TPS (Estatus de Protección Temporal)", "Retención de Remoción"]
        : ["Affirmative Asylum", "Defensive Asylum", "TPS (Temporary Protected Status)", "Withholding of Removal"]
    },
    {
      id: "ciudadania",
      icon: Landmark,
      title: isEs ? "Ciudadanía" : "Citizenship",
      desc: isEs
        ? "El paso final de tu historia migratoria. Acompañamiento integral hasta tu juramento."
        : "The final step in your immigration story. Comprehensive support until your oath.",
      details: isEs
        ? "Te guiaremos en la solicitud N-400, preparándote para el examen de cívica e historia y asegurando que cumplas con todos los requisitos de buen carácter moral."
        : "We will guide you through the N-400 application, preparing you for the civics and history exam and ensuring you meet all requirements of good moral character.",
      bullets: isEs
        ? ["Solicitud N-400", "Preparación para Examen", "Certificados de Ciudadanía", "Naturalización para Militares"]
        : ["N-400 Application", "Exam Preparation", "Citizenship Certificates", "Military Naturalization"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-28 px-4 md:px-8 bg-premium" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6"
          >
            {isEs ? "Áreas de Práctica" : "Practice Areas"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            {isEs
              ? "El sistema migratorio no perdona errores. Te brindamos protección legal de élite en cada paso de tu proceso."
              : "The immigration system is unforgiving. We provide elite legal protection at every step of your process."}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants as any}>
              <button
                onClick={() => setSelectedService(service)}
                className="glass-card p-8 md:p-10 rounded-2xl block group text-left w-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/10 transition-all duration-300 relative overflow-hidden h-full"
              >
                {/* Tech blue hover line at bottom */}
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                
                <div className="w-14 h-14 bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white rounded-xl flex items-center justify-center transition-all mb-8 group-hover:rotate-3">
                  <service.icon strokeWidth={1.5} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 font-serif">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">{service.desc}</p>
                
                <div className="flex items-center text-tech font-bold text-sm tracking-wide mt-auto">
                  {isEs ? "Ver más" : "Learn more"} 
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL DETALLADO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden z-10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-navy transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-navy/20">
                  <selectedService.icon strokeWidth={1.5} className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-bold text-navy font-serif mb-6">{selectedService.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-8 italic">
                  &quot;{selectedService.desc}&quot;
                </p>
                
                <div className="h-px bg-gray-100 mb-8" />
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  {selectedService.details}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.bullets.map((bullet: string, i: number) => (
                    <div key={i} className="flex items-center text-navy font-semibold text-sm bg-premium p-3 rounded-xl">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 bg-navy text-white py-4 rounded-xl font-bold hover:bg-navy/90 transition-all text-center shadow-lg shadow-navy/20"
                  >
                    {isEs ? "Agendar Consulta Gratuita" : "Schedule Free Consultation"}
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="flex-1 border-2 border-navy text-navy py-4 rounded-xl font-bold hover:bg-navy/5 transition-all text-center"
                  >
                    {isEs ? "Cerrar" : "Close"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
