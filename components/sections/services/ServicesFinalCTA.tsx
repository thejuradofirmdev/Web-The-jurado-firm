import Link from "next/link";
import { Calendar, MessageSquare } from "lucide-react";

/**
 * 🎯 ServicesFinalCTA — CTA final de la página de servicios
 * Bg navy exterior, card interior con botones y efecto de blob dorado
 */
export function ServicesFinalCTA({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="bg-[#000d22] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-[#0d2340] p-12 rounded-3xl text-center relative overflow-hidden">
        {/* Blob decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b5800] opacity-5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          {isEs
            ? <>¿Tu familia o tu talento te trajo hasta aquí? <br /><span className="text-[#f7bd48] italic font-medium">Hagámoslo oficial.</span></>
            : <>Did your family or talent bring you here? <br /><span className="text-[#f7bd48] italic font-medium">Let&apos;s make it official.</span></>}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
          <Link
            href={`/${locale}#contacto`}
            className="flex items-center justify-center gap-3 bg-[#7b5800] text-white px-10 py-5 rounded-xl font-bold shadow-2xl hover:bg-[#5d4200] transition-all w-full md:w-auto text-lg uppercase tracking-widest"
          >
            <Calendar className="h-5 w-5" />
            {isEs ? "Iniciar Trámite Ahora" : "Start My Process Now"}
          </Link>
          <a
            href="https://wa.me/18005705101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-xl border-2 border-[#25D366] text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-all w-full md:w-auto"
          >
            <MessageSquare className="h-5 w-5" />
            <span>{isEs ? "WHATSAPP DIRECTO" : "DIRECT WHATSAPP"}</span>
          </a>
        </div>

        <p className="text-slate-400 mt-8 text-sm italic">
          {isEs
            ? "Sin cargos ocultos. Transparencia legal desde el día 1."
            : "No hidden fees. Legal transparency from day 1."}
        </p>
      </div>
    </section>
  );
}
