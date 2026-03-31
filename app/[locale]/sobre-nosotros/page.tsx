import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutTrustBar } from "@/components/sections/about/AboutTrustBar";
import { AttorneyBio } from "@/components/sections/about/AttorneyBio";
import { MissionValues } from "@/components/sections/about/MissionValues";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { AboutCertifications } from "@/components/sections/about/AboutCertifications";
import { OfficeLocations } from "@/components/sections/about/OfficeLocations";
import { PreFooterCTA } from "@/components/sections/about/PreFooterCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | The Jurado Firm",
  description:
    "Conoce a la firma número 1 en autoridad de inmigración en California liderada por el abogado Carlos Jurado.",
};

/**
 * 🏢 AboutPage — Página Sobre Nosotros completa (/sobre-nosotros)
 * Ruta: /[locale]/sobre-nosotros
 */
export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col w-full min-h-screen antialiased bg-[#f7f9fc]">
      {/* 1️⃣ Hero Principal */}
      <AboutHero locale={locale} />

      {/* 2️⃣ Barra de confianza (State Bar) flotante */}
      <AboutTrustBar locale={locale} />

      {/* 3️⃣ Biografía del abogado principal */}
      <AttorneyBio locale={locale} />

      {/* 4️⃣ Valores y Misión */}
      <MissionValues locale={locale} />

      {/* 5️⃣ Equipo y staff */}
      <TeamSection locale={locale} />

      {/* 6️⃣ Barras de certificaciones/aliados */}
      <AboutCertifications locale={locale} />

      {/* 7️⃣ Oficinas y locaciones */}
      <OfficeLocations locale={locale} />

      {/* 8️⃣ Llamado a la acción pre-footer */}
      <PreFooterCTA locale={locale} />
    </div>
  );
}
