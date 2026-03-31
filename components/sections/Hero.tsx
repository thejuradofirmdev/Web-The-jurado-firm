import Link from "next/link";
import { LeadForm } from "@/components/sections/LeadForm";
import { Phone } from "lucide-react";

/**
 * 🦸 Hero — The Jurado Firm
 * Layout asimétrico 60/40: izquierda content oscuro sobre imagen + stats, derecha formulario blanco
 */
export async function Hero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="relative min-h-[921px] flex flex-col lg:flex-row overflow-hidden">

      {/* ══ Columna Izquierda 60% — Hero Content ══ */}
      <div
        className="w-full lg:w-[60%] relative flex items-center px-8 lg:px-20 py-20"
        style={{
          background: "linear-gradient(rgba(0,13,34,0.65), rgba(0,13,34,0.65)), url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat",
        }}
      >
        <div className="relative z-10 max-w-2xl">
          {/* Badge */}
          <span className="inline-block py-1 px-4 bg-yellow-600/20 border border-yellow-400/30 text-yellow-300 rounded-full text-sm font-medium mb-6">
            {isEs ? "Firma de Abogados de Inmigración · Long Beach, CA" : "Immigration Law Firm · Long Beach, CA"}
          </span>

          {/* H1 */}
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            {isEs ? "Tu familia merece un futuro aquí." : "Your family deserves a future here."}
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl">
            {isEs
              ? "Abogados de inmigración bilingües que entienden tu cultura. Hemos ayudado a cientos de familias en California a reunirse."
              : "Bilingual immigration attorneys who understand your culture. We've helped hundreds of families reunite in California."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href={`/${locale}#contacto`}
              className="bg-[#f7bd48] hover:bg-[#7b5800] text-[#000d22] hover:text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl text-center"
            >
              {isEs ? "Agenda tu Consulta Gratuita" : "Schedule Your Free Consultation"}
            </Link>
            <a
              href="tel:18005705101"
              className="border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {isEs ? "Llámanos: 1(800) 570-5101" : "Call us: 1(800) 570-5101"}
            </a>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <span className="text-[#f7bd48] font-bold text-2xl block">500+</span>
              <span className="text-white/70 text-sm">{isEs ? "Familias Reunidas" : "Families Reunited"}</span>
            </div>
            <div>
              <span className="text-[#f7bd48] font-bold text-2xl block">15+</span>
              <span className="text-white/70 text-sm">{isEs ? "Años de Experiencia" : "Years of Experience"}</span>
            </div>
            <div>
              <span className="text-[#f7bd48] font-bold text-2xl block">100%</span>
              <span className="text-white/70 text-sm">{isEs ? "Compromiso Total" : "Full Commitment"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Columna Derecha 40% — Formulario Flotante ══ */}
      <div className="w-full lg:w-[40%] bg-[#f7f9fc] flex items-center justify-center p-8 lg:p-12">
        <LeadForm locale={locale} />
      </div>
    </section>
  );
}
