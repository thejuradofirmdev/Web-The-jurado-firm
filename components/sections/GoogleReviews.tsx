"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const casesEs = [
  { name: "Familia González", type: "Reunificación Familiar", text: "La espera terminó. Después de 5 años, mi esposo y yo por fin estamos juntos legalmente. Profesionales de verdad.", img: "https://images.unsplash.com/photo-1542037104853-ff3411dbcd31?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "José R.", type: "Defensa contra Deportación", text: "Estábamos a punto de perder la esperanza. El abogado Carlos peleó en corte como si fuera su familia.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Lucía F.", type: "Visa de Talento O-1", text: "Gracias a ellos pude traer mi carrera artística a EE.UU. Un caso minuciosamente preparado.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" }
];

const casesEn = [
  { name: "Gonzalez Family", type: "Family Reunification", text: "The wait is over. After 5 years, my husband and I are finally together legally. Real professionals.", img: "https://images.unsplash.com/photo-1542037104853-ff3411dbcd31?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Jose R.", type: "Removal Defense", text: "We were about to lose hope. Attorney Carlos fought in court like we were his own family.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200" },
  { name: "Lucia F.", type: "O-1 Talent Visa", text: "Thanks to them I was able to bring my artistic career to the US. A meticulously prepared case.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200" }
];

// CountUp Component
function CountUp({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

/**
 * ⭐ GoogleReviews — Sección de testimonios con contador de éxitos.
 * Fondo Ivory Premium para contraste sofisticado.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.locale - El idioma actual ('es' o 'en').
 */
export function GoogleReviews({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const stories = isEs ? casesEs : casesEn;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [stories.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section className="bg-[#fcfaf7] py-24 border-y border-premium overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center gap-2 mb-4 bg-green-50 text-green-700 px-4 py-1.5 rounded-full font-bold"
          >
             <CheckCircle2 className="w-5 h-5 text-green-500" />
             <span>Casos APPROVED</span>
          </motion.div>
          <h2 className="font-serif font-bold text-navy text-4xl md:text-5xl mb-4">
            <CountUp end={500} />+ {isEs ? "Familias Reunificadas" : "Families Reunited"}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {isEs ? "Historias reales, resultados reales. Conozca lo que dicen nuestros clientes." : "Real stories, real results. See what our clients have to say."}
          </p>
        </div>

        <div className="relative h-[28rem] md:h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4 md:px-16 flex justify-center"
            >
               <div className="glass-card bg-white p-8 md:p-10 rounded-3xl max-w-3xl w-full relative shadow-2xl shadow-navy/5">
                 
                 {/* Badge APPROVED on the card top right */}
                 <div className="absolute -top-4 -right-4 md:-right-6 bg-green-500 text-white font-bold px-4 py-2 rounded-xl shadow-lg border-2 border-white transform rotate-3 flex items-center gap-1 z-10">
                   <CheckCircle2 className="w-4 h-4" /> APPROVED
                 </div>

                 <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="shrink-0 relative">
                       <Image 
                         src={stories[currentIndex].img} 
                         alt={stories[currentIndex].name} 
                         width={100} height={100} 
                         className="rounded-full border-4 border-premium w-24 h-24 object-cover"
                         unoptimized
                       />
                       <div className="absolute -bottom-2 -right-2 bg-gold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                          <Quote className="w-4 h-4 text-white" />
                       </div>
                    </div>
                    <div>
                      <p className="font-sans text-lg md:text-xl text-navy font-medium italic mb-6 leading-relaxed">
                        &quot;{stories[currentIndex].text}&quot;
                      </p>
                      <div>
                        <span className="font-bold text-navy block text-lg">{stories[currentIndex].name}</span>
                        <span className="text-sm text-gold font-bold">{stories[currentIndex].type}</span>
                      </div>
                    </div>
                 </div>
               </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button onClick={handlePrev} className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-premium text-navy transition-colors z-20 hover:-translate-x-1">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={handleNext} className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-premium text-navy transition-colors z-20 hover:translate-x-1">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href={`/${locale}/casos-approved`} className="inline-flex items-center justify-center gap-2 text-tech font-bold hover:gap-3 transition-all">
            {isEs ? "Ver todas las historias" : "See all stories"} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
