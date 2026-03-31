"use client";

import Link from "next/link";

/**
 * 📋 ProcessSection — Tu Camino a la Legalidad — 4 pasos numerados
 * Diseño del HTML de referencia: bg navy, círculos gold numerados, línea punteada conectora
 */
export function ProcessSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const steps = [
    {
      n: 1,
      title: isEs ? "Agenda" : "Schedule",
      desc: isEs
        ? "Reserva tu consulta inicial gratuita por teléfono o web."
        : "Book your free initial consultation by phone or online.",
    },
    {
      n: 2,
      title: isEs ? "Evaluación" : "Evaluation",
      desc: isEs
        ? "Analizamos su caso detalladamente con el Abogado Jurado."
        : "We analyze your case in detail with Attorney Jurado.",
    },
    {
      n: 3,
      title: isEs ? "Preparación" : "Preparation",
      desc: isEs
        ? "Recopilamos y enviamos toda la documentación necesaria."
        : "We collect and submit all the necessary documentation.",
    },
    {
      n: 4,
      title: isEs ? "Resultado" : "Result",
      desc: isEs
        ? "Acompañamiento hasta la resolución final de su trámite."
        : "We accompany you until the final resolution of your case.",
    },
  ];

  return (
    <section className="py-28 px-8 bg-[#000d22] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-serif font-bold mb-4">
            {isEs ? "Su Camino a la Legalidad" : "Your Path to Legal Status"}
          </h2>
          <p className="text-[#778bad]">
            {isEs
              ? "Un proceso claro, transparente y profesional en cada etapa."
              : "A clear, transparent and professional process at every stage."}
          </p>
        </div>

        <div className="relative">
          {/* Línea punteada conectora (solo desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 border-t-2 border-dotted border-[#f7bd48]/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.n} className="text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#f7bd48] text-[#000d22] flex items-center justify-center font-bold text-2xl mb-6 shadow-xl">
                  {step.n}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-[#778bad] text-sm leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <Link
            href={`/${locale}#contacto`}
            className="inline-block bg-[#f7bd48] hover:bg-[#7b5800] text-[#000d22] hover:text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all"
          >
            {isEs ? "Empezar mi consulta gratuita →" : "Start my free consultation →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
