/**
 * 📋 ProcessTimeline — 5 pasos del proceso de aprobación de visa
 * Diseño del HTML de referencia: línea horizontal bg, 5 cards con hover navy
 */
export function ProcessTimeline({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const steps = [
    {
      n: 1,
      title: isEs ? "Evaluación" : "Evaluation",
      desc: isEs
        ? "Análisis detallado de tu perfil y elegibilidad inicial."
        : "Detailed analysis of your profile and initial eligibility.",
    },
    {
      n: 2,
      title: isEs ? "Recopilación" : "Collection",
      desc: isEs
        ? "Armado estratégico del expediente con pruebas legales."
        : "Strategic assembly of the file with legal evidence.",
    },
    {
      n: 3,
      title: isEs ? "Presentación" : "Submission",
      desc: isEs
        ? "Envío de la petición ante USCIS con representación legal."
        : "Filing the petition before USCIS with legal representation.",
    },
    {
      n: 4,
      title: isEs ? "Aprobación" : "Approval",
      desc: isEs
        ? "Notificación de éxito y preparación para el siguiente paso."
        : "Success notification and preparation for the next step.",
    },
    {
      n: 5,
      title: isEs ? "Entrevista" : "Interview",
      desc: isEs
        ? "Asesoría para tu cita consular final y sellado de visa."
        : "Guidance for your final consular appointment and visa stamping.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f2f4f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#000d22] mb-4">
            {isEs ? "El Camino a tu Aprobación" : "The Path to Your Approval"}
          </h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">
            {isEs ? "Un proceso transparente paso a paso" : "A transparent step-by-step process"}
          </p>
        </div>

        <div className="relative">
          {/* Línea horizontal conectora */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[#c4c6ce] -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-white p-6 rounded-xl text-center group transition-all hover:bg-[#0d2340] cursor-default"
              >
                <div className="w-12 h-12 bg-[#000d22] text-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7b5800] transition-colors font-bold">
                  {step.n}
                </div>
                <h4 className="font-serif font-bold text-[#000d22] mb-2 group-hover:text-white transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
