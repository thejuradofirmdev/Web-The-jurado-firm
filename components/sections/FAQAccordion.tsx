export function FAQAccordion({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const faqs = [
    {
      q: isEs ? "¿Cuánto cuesta la primera consulta?" : "How much is the initial consultation?",
      a: isEs 
        ? "Ofrecemos una primera consulta completamente gratuita para evaluar tu caso y darte una perspectiva honesta sin compromiso."
        : "We offer a completely free initial consultation to evaluate your case and give you an honest perspective with no strings attached."
    },
    {
      q: isEs ? "¿Puedo arreglar mis papeles si entré indocumentado?" : "Can I fix my status if I entered undocumented?",
      a: isEs 
        ? "Depende de tu situación particular (matrimonio, tiempo en el país, delitos, etc). Hay varias vías como el perdón (waiver) o ajusté bajo ciertas leyes. Por eso la consulta es fundamental."
        : "It depends on your specific situation (marriage, time in country, record, etc). There are paths like waivers. That's why the consultation is crucial."
    },
    {
      q: isEs ? "¿Atienden casos fuera de California?" : "Do you take cases outside of California?",
      a: isEs 
        ? "Sí, las leyes de inmigración son federales, lo que nos permite representar a clientes en los 50 estados de la nación y en el extranjero ante consulados."
        : "Yes, immigration laws are federal, which allows us to represent clients in all 50 states and abroad at consulates."
    },
    {
      q: isEs ? "¿Ofrecen planes de pago?" : "Do you offer payment plans?",
      a: isEs 
        ? "Entendemos el esfuerzo financiero que representa un caso. Ofrecemos planes de pago accesibles y transparentes sin intereses ocultos."
        : "We understand the financial effort a case requires. We offer accessible payment plans with transparent pricing and no hidden interest."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            {isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-gray-600">
            {isEs 
              ? "Respuestas claras a tus dudas más comunes sobre inmigración."
              : "Clear answers to your most common immigration questions."}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-gray-200 rounded-lg bg-gray-50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-primary">
                <span className="text-lg pr-4">{faq.q}</span>
                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
