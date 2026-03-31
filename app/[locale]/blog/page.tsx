import { BlogHero } from "@/components/sections/blog/BlogHero";
import { FeaturedPost } from "@/components/sections/blog/FeaturedPost";
import { BlogFilters } from "@/components/sections/blog/BlogFilters";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { NewsletterOptIn } from "@/components/sections/blog/NewsletterOptIn";
import { BlogFinalCTA } from "@/components/sections/blog/BlogFinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Legal | The Jurado Firm",
  description:
    "Información clara y actualizada sobre leyes de inmigración en California. Manténgase al día con DACA, visas de talento, y reunificación familiar.",
};

/**
 * 📰 BlogPage — Página del Blog completa (/blog)
 * Ruta: /[locale]/blog
 */
export default function BlogPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col w-full min-h-screen antialiased bg-[#f7f9fc]">
      {/* 1️⃣ Hero inicial */}
      <BlogHero locale={locale} />

      {/* 2️⃣ Artículo destacado (Hero horizontal) */}
      <FeaturedPost locale={locale} />

      {/* 3️⃣ Barra sticky de filtros */}
      <BlogFilters locale={locale} />

      {/* 4️⃣ Grilla interior y Sidebar */}
      <BlogGrid locale={locale} />

      {/* 5️⃣ Suscripción al Newsletter (Fondo Navy) */}
      <NewsletterOptIn locale={locale} />

      {/* 6️⃣ CTA final blanco con disclaimer */}
      <BlogFinalCTA locale={locale} />
    </div>
  );
}
