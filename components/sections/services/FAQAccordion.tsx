"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/** 📌 Tipo de pregunta FAQ */
interface FAQItem {
  q: string;
  a: string;
}

/**
 * 🙋 FAQAccordion — Preguntas frecuentes de inmigración
 * Diseño del HTML de referencia: details/summary con chevron animado
 */
export function FAQAccordion({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const faqs: FAQItem[] = isEs
    ? [
        {
          q: "¿Cuánto tiempo tarda el proceso de reunificación familiar?",
          a: "El tiempo varía según la categoría. Para familiares inmediatos (esposos, hijos menores y padres de ciudadanos), el trámite suele tomar de 12 a 18 meses. Para otras categorías, depende de la disponibilidad de visas en el boletín mensual de USCIS.",
        },
        {
          q: "¿Necesito una oferta de trabajo para las visas profesionales?",
          a: "Sí, la mayoría de las visas de trabajo (H, P, TN) requieren un empleador o patrocinador estadounidense. Sin embargo, para talentos excepcionales (Visa O-1) o residencias EB-2 NIW, existen caminos donde el perfil mismo es la llave.",
        },
        {
          q: "¿Los músicos del regional mexicano califican para la Visa P-3?",
          a: "Absolutamente. La Visa P-3 es excelente para grupos que vienen a realizar presentaciones de intercambio cultural o culturalmente únicas. El regional mexicano es un ejemplo perfecto de arte que califica bajo este esquema.",
        },
        {
          q: "¿Qué pasa si tengo una orden de deportación previa?",
          a: "Casos con órdenes de deportación son complejos pero no imposibles. Evaluamos si es viable solicitar un perdón (waiver) I-212 o I-601A para reestructurar tu caso de manera exitosa.",
        },
      ]
    : [
        {
          q: "How long does the family reunification process take?",
          a: "The time varies by category. For immediate relatives (spouses, minor children, and parents of citizens), the process usually takes 12 to 18 months. For other categories, it depends on visa availability in the monthly USCIS bulletin.",
        },
        {
          q: "Do I need a job offer for professional visas?",
          a: "Yes, most work visas (H, P, TN) require a US employer or sponsor. However, for exceptional talent (O-1 Visa) or EB-2 NIW residencies, there are paths where the profile itself is the key.",
        },
        {
          q: "Do regional Mexican musicians qualify for the P-3 Visa?",
          a: "Absolutely. The P-3 Visa is excellent for groups performing culturally unique or cultural exchange shows. Regional Mexican music is a perfect example of art that qualifies under this scheme.",
        },
        {
          q: "What happens if I have a prior deportation order?",
          a: "Cases with deportation orders are complex but not impossible. We evaluate whether it's viable to apply for a waiver (I-212 or I-601A) to successfully restructure your case.",
        },
      ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-[#000d22] mb-12 text-center">
        {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full flex justify-between items-center p-6 hover:bg-[#f2f4f7] transition-colors text-left"
            >
              <span className="font-bold text-[#000d22] pr-4">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                <p className="pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Disclaimer Legal */}
      <div className="mt-12 p-6 bg-white border-l-4 border-amber-500 rounded-r-lg">
        <p className="text-[11px] text-gray-400 italic leading-relaxed">
          {isEs
            ? "AVISO LEGAL: La información en este sitio web tiene fines informativos únicamente y no constituye asesoramiento legal. El uso de este sitio o el contacto con la firma no establece una relación abogado-cliente. Los resultados pasados no garantizan resultados futuros."
            : "LEGAL NOTICE: The information on this website is for informational purposes only and does not constitute legal advice. Use of this site or contact with the firm does not establish an attorney-client relationship. Past results do not guarantee future results."}
        </p>
      </div>
    </section>
  );
}
