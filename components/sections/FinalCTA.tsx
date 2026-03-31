import Link from "next/link";
import { Calendar } from "lucide-react";

/**
 * 🎯 FinalCTA — Llamada a la acción final antes del Footer
 * Diseño del HTML de referencia: bg neutro, h2 grande centrado, 2 botones (consulta + WhatsApp)
 */
export function FinalCTA({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-28 px-8 bg-[#f2f4f7] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#000d22] mb-12 leading-tight">
          {isEs
            ? "Comienza un nuevo capítulo en tu vida."
            : "Start a new chapter in your life."}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/${locale}#contacto`}
            className="bg-[#7b5800] hover:bg-[#5d4200] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3"
          >
            {isEs ? "Agendar Consulta Gratuita" : "Schedule Free Consultation"} 
            <Calendar className="h-5 w-5" />
          </Link>
          <a
            href="https://wa.me/18005705101"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3"
          >
            {isEs ? "Habla con nosotros por WhatsApp" : "Chat with us on WhatsApp"}
          </a>
        </div>
      </div>
    </section>
  );
}
