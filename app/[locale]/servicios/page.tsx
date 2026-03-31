import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesTrustBar } from "@/components/sections/services/ServicesTrustBar";
import { ServiceCategories } from "@/components/sections/services/ServiceCategories";
import { EntertainmentVisas } from "@/components/sections/services/EntertainmentVisas";
import { ProcessTimeline } from "@/components/sections/services/ProcessTimeline";
import { FAQAccordion } from "@/components/sections/services/FAQAccordion";
import { ServicesFinalCTA } from "@/components/sections/services/ServicesFinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Legales Integrados | The Jurado Firm",
  description:
    "Expertos en reunificación familiar, visas de trabajo, visas de entretenimiento (O-1, P-1, P-3) y defensa de deportación en California.",
};

/**
 * 📄 ServicesPage — Página completa de Servicios (/servicios)
 * Ruta: /[locale]/servicios
 */
export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col w-full min-h-screen antialiased">
      {/* 1️⃣ Hero con formulario de evaluación */}
      <ServicesHero locale={locale} />

      {/* 2️⃣ Trust Bar horizontal flotante */}
      <ServicesTrustBar locale={locale} />

      {/* 3️⃣ 4 Categorías de servicios */}
      <ServiceCategories locale={locale} />

      {/* 4️⃣ Sección destacada: Visas de Entretenimiento */}
      <EntertainmentVisas locale={locale} />

      {/* 5️⃣ Timeline de aprobación (5 pasos) */}
      <ProcessTimeline locale={locale} />

      {/* 6️⃣ FAQ Accordion */}
      <FAQAccordion locale={locale} />

      {/* 7️⃣ CTA Final */}
      <ServicesFinalCTA locale={locale} />
    </div>
  );
}
