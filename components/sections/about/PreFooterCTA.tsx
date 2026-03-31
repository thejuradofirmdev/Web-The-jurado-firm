import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

/**
 * 📣 PreFooterCTA — Llamado a la acción final antes del footer
 * Imagen full width on bg, textos grandes y botones
 */
export function PreFooterCTA({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS7bQ9qJ6DUspT-w4quPekbQ4QfHF0HsP1FNAQFkojV2ELknqaDJgWA_waImyy8t6RH3TmJn2ZDz5Xwk9y_aoYwLF5BtdXojVZ_BT2FIOe-w7UU8ig3s1LqoRWrVjEG6DGnvP-XYNn3SWzie5LhSyv2MgDJnggFYR9MC_DDZOaRfLCmrgV2kle8rNhsY7VDVqF9TNuh61Ugon-C_hMUDmhaBdY11A_HPvHNuWj-v5fjuLSRrjRvyqGVyGAzn2gU4qMNdE351SbwQrR"
          alt="Happy family"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay backdrop */}
        <div className="absolute inset-0 bg-[#000d22]/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
        <h2 className="font-serif text-5xl mb-8 leading-tight">
          {isEs ? "¿Listo para darnos tu confianza?" : "Ready to trust us with your case?"}
        </h2>
        <p className="text-xl mb-12 text-[#e0e3e6] leading-relaxed">
          {isEs
            ? "Estamos listos para escuchar tu historia y empezar a construir el camino hacia tu estatus legal en Estados Unidos."
            : "We are ready to listen to your story and start building the path to your legal status in the United States."}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/${locale}#contacto`}
            className="bg-[#7b5800] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#5d4200] hover:scale-105 transition-all"
          >
            {isEs ? "Agenda tu Consulta Gratuita" : "Schedule Your Free Consultation"}
          </Link>
          <a
            href="https://wa.me/18005705101"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all"
          >
            <MessageSquare className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        <div className="mt-12 text-2xl font-bold font-serif text-[#f7bd48]">
          1(800) 570-5101
        </div>
      </div>
    </section>
  );
}
