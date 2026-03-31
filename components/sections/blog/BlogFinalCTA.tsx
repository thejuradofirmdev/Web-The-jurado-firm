import Link from "next/link";
import { Calendar, MessageSquare } from "lucide-react";

/**
 * 🎯 BlogFinalCTA — CTA limpio y centrado para la página de Blog
 */
export function BlogFinalCTA({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-24 px-8 text-center bg-white border-t border-gray-100">
      <h2 className="font-serif text-4xl text-[#000d22] mb-6">
        {isEs ? "¿Tienes dudas sobre un tema específico?" : "Have questions about a specific topic?"}
      </h2>
      <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
        {isEs
          ? "Nuestro equipo de abogados expertos está listo para escuchar tu historia y diseñar una estrategia personalizada."
          : "Our team of expert attorneys is ready to hear your story and design a personalized strategy."}
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <Link
          href={`/${locale}#contacto`}
          className="px-10 py-4 bg-[#B8860B] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2 uppercase text-sm tracking-wider"
        >
          <Calendar className="h-5 w-5" />
          {isEs ? "Agenda tu Consulta Gratuita" : "Schedule Your Free Consultation"}
        </Link>
        <a
          href="https://wa.me/18005705101"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-all flex items-center gap-2 uppercase text-sm tracking-wider"
        >
          <MessageSquare className="h-5 w-5" />
          {isEs ? "Hablar por WhatsApp" : "Talk on WhatsApp"}
        </a>
      </div>

      <p className="mt-16 text-sm text-gray-400 max-w-3xl mx-auto italic px-4 leading-relaxed">
        {isEs
          ? "La información en este blog es solo para fines informativos y no constituye asesoría legal. El uso de este sitio web no crea una relación abogado-cliente entre usted y The Jurado Firm."
          : "The information on this blog is for informational purposes only and does not constitute legal advice. The use of this website does not create an attorney-client relationship between you and The Jurado Firm."}
      </p>
    </section>
  );
}
