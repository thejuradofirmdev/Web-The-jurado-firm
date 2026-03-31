import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

/**
 * ⭐ FeaturedPost — Artículo destacado (DACA 2026 en este caso)
 * Card horizontal grande
 */
export function FeaturedPost({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="px-8 pb-20 max-w-7xl mx-auto">
      <div className="bg-[#f2f4f7] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-shadow">
        {/* Imagen */}
        <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYFLS2dj2t5p5RHioctEVGZ6CzPW5FsTVp9JrbytmPBxRKQiqQ9y0Mr6Zf57iau9eXW42dhBj6s0RL_rNfumeQ3VsmZf8MV03FBYc0vrTfLy8Yl7H9eBhAbMuF-6ts_f9IIpWTbQJKnm4a4AipFiQTt8X_0BQJp_I8p2qyMQkGdiVErixSULsY0SVinVcUa6q7qQN5Wk3lhbWKF0sGC3mY8wZ1Mbq8s1avRoZTuIj-VupjiUP63oAnDZOMDvS0zrpIrT0DLzhxHJ0Z"
            alt="Family walking in park"
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-700"
            unoptimized
          />
        </div>

        {/* Info */}
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-[#0d2340] text-white px-3 py-1 text-xs font-bold rounded tracking-wide">
              {isEs ? "ACTUALIZACIÓN CRÍTICA" : "CRITICAL UPDATE"}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Clock className="h-4 w-4" /> {isEs ? "8 min lectura" : "8 min read"}
            </span>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl text-[#000d22] mb-6 leading-tight">
            {isEs
              ? "Cambios en el Proceso de DACA 2026: Lo que necesitas saber hoy"
              : "Changes to the 2026 DACA Process: What you need to know today"}
          </h2>

          <p className="text-gray-500 mb-8 text-lg">
            {isEs
              ? "Exploramos las nuevas directrices del USCIS para renovaciones y primeras aplicaciones, desglosando cada cambio técnico en lenguaje sencillo para nuestra comunidad."
              : "We explore the new USCIS guidelines for renewals and first-time applications, breaking down every technical change into simple language for our community."}
          </p>

          <Link href="#" className="flex items-center gap-2 text-[#B8860B] font-bold group w-fit">
            {isEs ? "Leer Artículo Completo" : "Read Full Article"}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
