// removed un-used import

export function Process({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const steps = [
    {
      number: "01",
      title: isEs ? "Consulta Gratuita" : "Free Consultation",
      desc: isEs ? "Evaluamos tu caso sin compromiso y explicamos tus opciones legales de forma honesta." : "We evaluate your case with no strings attached and honestly explain your legal options."
    },
    {
      number: "02",
      title: isEs ? "Estrategia Legal" : "Legal Strategy",
      desc: isEs ? "Diseñamos un plan de acción personalizado basado en tu situación migratoria específica." : "We design a customized action plan based on your specific immigration situation."
    },
    {
      number: "03",
      title: isEs ? "Implementación" : "Implementation",
      desc: isEs ? "Preparamos y sometemos tu documentación cumpliendo con todos los requisitos de USCIS." : "We prepare and submit your documentation complying with all USCIS requirements."
    },
    {
      number: "04",
      title: isEs ? "Resolución" : "Resolution",
      desc: isEs ? "Te acompañamos hasta alcanzar el mejor resultado posible para tu estatus legal." : "We stand by you until achieving the best possible outcome for your legal status."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            {isEs ? "Nuestro Proceso" : "Our Process"}
          </h2>
          <p className="text-lg text-gray-600">
            {isEs
              ? "Un camino estructurado y transparente hacia la resolución de tu caso migratorio."
              : "A structured and transparent path towards the resolution of your immigration case."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gray-100"></div>
              )}
              
              <div className="bg-background rounded-2xl p-8 h-full border border-gray-100 shadow-sm relative z-10 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-5xl font-heading font-bold text-secondary/20 mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
