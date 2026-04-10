import { AboutHero } from "@/components/sections/about/AboutHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AttorneyBio } from "@/components/sections/about/AttorneyBio";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { TeamSection } from "@/components/sections/TeamSection";
import { OfficeLocations } from "@/components/sections/about/OfficeLocations";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | The Jurado Firm",
  description:
    "Conoce a la firma número 1 en autoridad de inmigración en California liderada por el abogado Carlos Jurado.",
};

/**
 * 🏢 AboutPage — Página Sobre Nosotros completa (/sobre-nosotros)
 * Ruta: /[locale]/sobre-nosotros
 * Optimizada para consistencia visual y reducción de redundancia de componentes.
 * @param {Object} props - Parámetros de la página.
 * @param {Object} props.params - Parámetros de la ruta.
 * @param {string} props.params.locale - El idioma actual ('es' o 'en').
 */
export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col w-full min-h-screen antialiased bg-[#fcfaf7]">
      {/* 1️⃣ Hero Principal */}
      <AboutHero locale={locale} />

      {/* 2️⃣ Barra de confianza unificada */}
      <div className="-mt-12 relative z-20">
        <TrustBar locale={locale} />
      </div>

      {/* 3️⃣ Biografía detallada del abogado principal */}
      <AttorneyBio locale={locale} />

      {/* 4️⃣ Valores y Misión del despacho */}
      <MissionValues locale={locale} />

      {/* 5️⃣ Equipo y staff (Componente Unificado) */}
      <TeamSection locale={locale} />

      {/* 6️⃣ Oficinas y locaciones en California */}
      <OfficeLocations locale={locale} />

      {/* 7️⃣ Sección de contacto (Conversión) */}
      <ContactSection locale={locale} />

      {/* 8️⃣ Llamado a la acción final (Unificado) */}
      <FinalCTA locale={locale} />
    </div>
  );
}
