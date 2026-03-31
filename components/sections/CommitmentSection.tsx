import Link from "next/link";

/**
 * 🤝 CommitmentSection — Compromiso del Abogado (quote + lista de valores)
 * Diseño del HTML de referencia: bg navy, cita grande a la izquierda, card derecha con lista
 */
export function CommitmentSection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const commitments = [
    {
      icon: "✅",
      title: isEs ? "Honestidad Radical" : "Radical Honesty",
      desc: isEs
        ? "Si no podemos ayudarle, se lo diremos desde el primer día."
        : "If we can't help you, we'll tell you from day one.",
    },
    {
      icon: "📖",
      title: isEs ? "Estrategia Personalizada" : "Personalized Strategy",
      desc: isEs
        ? "No usamos plantillas; cada caso se estudia de forma única."
        : "We don't use templates; each case is studied uniquely.",
    },
    {
      icon: "💳",
      title: isEs ? "Planes de Pago" : "Payment Plans",
      desc: isEs
        ? "Ofrecemos opciones flexibles para que el costo no sea un impedimento."
        : "We offer flexible options so that cost is not an obstacle.",
    },
  ];

  return (
    <section className="py-28 px-8 bg-[#000d22] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

        {/* Cita del Abogado */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <span className="text-6xl text-[#f7bd48] opacity-30 absolute -top-10 -left-6 font-serif">&ldquo;</span>
            <blockquote className="text-3xl font-serif italic leading-relaxed relative z-10">
              {isEs
                ? '"Mi misión no es solo ganar casos, es ganar tranquilidad para nuestras familias. Sé que detrás de cada expediente hay un sueño americano que merece ser protegido."'
                : '"My mission is not just to win cases, it\'s to win peace of mind for our families. I know that behind every file there is an American dream that deserves to be protected."'}
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-[#f7bd48]" />
              <span className="font-bold tracking-widest uppercase text-sm">
                {isEs ? "Abogado Carlos Jurado" : "Attorney Carlos Jurado"}
              </span>
            </div>
          </div>
        </div>

        {/* Card de Compromisos */}
        <div className="w-full lg:w-1/2 bg-[#0d2340] p-12 rounded-3xl">
          <span className="text-[#f7bd48] font-bold text-sm uppercase tracking-widest mb-4 block">
            {isEs ? "Nuestro Compromiso" : "Our Commitment"}
          </span>
          <h2 className="text-4xl font-serif font-bold mb-10">
            {isEs ? "Por qué confiar en nosotros" : "Why trust us"}
          </h2>
          <ul className="space-y-8">
            {commitments.map((c, idx) => (
              <li key={idx} className="flex items-center gap-6">
                <span className="text-3xl">{c.icon}</span>
                <div>
                  <h4 className="font-bold">{c.title}</h4>
                  <p className="text-[#778bad] text-sm mt-1">{c.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
