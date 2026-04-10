import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceCategories } from "@/components/sections/services/ServiceCategories";
import { EntertainmentVisas } from "@/components/sections/services/EntertainmentVisas";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Legales Integrados | The Jurado Firm",
  description:
    "Expertos en reunificación familiar, visas de trabajo, visas de entretenimiento (O-1, P-1, P-3) y defensa de deportación en California.",
};

/**
 * 📄 ServicesPage — Página completa de Servicios (/servicios)
 * Ruta: /[locale]/servicios
 * Se ha optimizado para eliminar redundancia y mejorar el flujo de conversión.
 * @param {Object} props - Parámetros de la página.
 * @param {Object} props.params - Parámetros de la ruta.
 * @param {string} props.params.locale - El idioma actual ('es' o 'en').
 */
export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col w-full min-h-screen antialiased">
      {/* 1️⃣ Hero limpio con propuesta de valor */}
      <ServicesHero locale={locale} />

      {/* 2️⃣ Trust Bar para consistencia de marca */}
      <TrustBar locale={locale} />

      {/* 3️⃣ Categorías detalladas de servicios */}
      <ServiceCategories locale={locale} />

      {/* 4️⃣ Especialidad: Visas de Entretenimiento */}
      <EntertainmentVisas locale={locale} />

      {/* 5️⃣ Proceso unificado (Camino a la Aprobación) */}
      <ProcessSection locale={locale} />

      {/* 6️⃣ Sección de contacto con Formulario de Evaluación */}
      <ContactSection locale={locale} />

      {/* 7️⃣ Preguntas Frecuentes unificadas */}
      <FAQAccordion locale={locale} />

      {/* 8️⃣ Llamada a la acción final */}
      <FinalCTA locale={locale} />
    </div>
  );
}
