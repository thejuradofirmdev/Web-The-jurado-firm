"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const googleReviewsEs = [
  { name: "Maria Gonzalez", text: "Excelente abogado. Me ayudó con mi visa U cuando otros dijeron que era imposible. Carlos es muy honesto.", date: "Hace 2 semanas" },
  { name: "Jose Ramirez", text: "El proceso de mi residencia fue rápido y sin problemas. El equipo bilingüe siempre me mantuvo informado de todo.", date: "Hace 1 mes" },
  { name: "Lucia Fernandez", text: "Me defendió en corte de deportación. Le debo mi tranquilidad a The Jurado Firm. 100% recomendados.", date: "Hace 3 meses" }
];

const googleReviewsEn = [
  { name: "Maria Gonzalez", text: "Excellent attorney. He helped me with my U visa when others said it was impossible. Carlos is very honest.", date: "2 weeks ago" },
  { name: "Jose Ramirez", text: "My residency process was fast and smooth. The bilingual team always kept me informed of everything.", date: "1 month ago" },
  { name: "Lucia Fernandez", text: "He defended me in deportation court. I owe my peace of mind to The Jurado Firm. 100% recommended.", date: "3 months ago" }
];

export function GoogleReviews({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const reviews = isEs ? googleReviewsEs : googleReviewsEn;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-white py-20 border-y border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="flex justify-center items-center gap-2 mb-8">
          <Star className="w-8 h-8 fill-gold text-gold" />
          <h2 className="font-serif font-bold text-navy text-3xl">Google Reviews</h2>
        </div>

        <div className="relative h-64 md:h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full px-12"
            >
              <Quote className="w-10 h-10 text-gold/20 mx-auto mb-4" />
              <p className="font-sans text-lg md:text-xl text-navy font-medium italic mb-6 leading-relaxed">
                &quot;{reviews[currentIndex].text}&quot;
              </p>
              <div className="flex flex-col items-center">
                <span className="font-bold text-navy">{reviews[currentIndex].name}</span>
                <span className="text-xs text-gray-400 mt-1">{reviews[currentIndex].date}</span>
                <div className="flex mt-2 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-premium text-navy transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-premium text-navy transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
