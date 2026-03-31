import Image from "next/image";
import Link from "next/link";
import { Music, Film, PlaySquare, Tent } from "lucide-react";

/**
 * 🎭 EntertainmentVisas — Sección destacada de visas de artistas
 * Bg navy oscuro, imagen en grayscale con hover a color, texto gold
 */
export function EntertainmentVisas({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const talents = [
    { icon: Music, label: isEs ? "Músicos y Orquestas" : "Musicians and Orchestras" },
    { icon: Film, label: isEs ? "Actores y Directores" : "Actors and Directors" },
    { icon: PlaySquare, label: isEs ? "Influencers & YouTube" : "Influencers & YouTube" },
    { icon: Tent, label: isEs ? "Promotores de Eventos" : "Event Promoters" },
  ];

  return (
    <section className="bg-[#0d2340] relative overflow-hidden py-24">
      {/* Fondo de textura sutil */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f7bd48_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Imagen izquierda con efecto grayscale/hover */}
        <div className="order-2 md:order-1 relative">
          {/* Borde decorativo */}
          <div className="absolute top-8 left-8 right-[-8px] bottom-[-8px] border-2 border-[#7b5800] rounded-xl z-0" />
          <div className="relative z-10">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqtZzUsuQJKO7qEO6B4nj_VkFwqysMRjywjf3N584Q0HRvo-lHOO5QxS8uSoD31dpSYCYEnar9_SvPXkhBIkMHTNvXRmIMvQidFKnyMYP0SXJXkJyegZauzJkCHGiXkcIbTCVCJ35LYc6_U0mBM4udNT174rhAwbPWH69kL0PlD4aYFQTXBGbljmjmWKbMw56TrD8if-k2D-iTdh1LhdxK0sijtYqe0T_fbY9UPMk3GpgSRPfUheCYip6E7OCMHiNyS_Sb377MjljK"
              alt="Band performing on stage"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              unoptimized
            />
          </div>
        </div>

        {/* Texto derecho */}
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            {isEs
              ? <>Tu arte no tiene fronteras. <br /><span className="text-[#f7bd48]">Tu visa tampoco.</span></>
              : <>Your art has no borders. <br /><span className="text-[#f7bd48]">Neither does your visa.</span></>}
          </h2>

          <p className="text-lg text-slate-300 font-light mb-10 leading-relaxed">
            {isEs
              ? "Somos la firma líder en California para talentos de la música regional mexicana, actores de doblaje, influencers y creativos que buscan llevar su carrera al mercado estadounidense."
              : "We are the leading firm in California for regional Mexican music talent, dubbing actors, influencers and creatives looking to take their career to the US market."}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {talents.map(({ icon: Icon, label }, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <Icon className="h-5 w-5 text-[#f7bd48] mt-0.5 shrink-0" />
                <p className="text-sm font-semibold text-white">{label}</p>
              </div>
            ))}
          </div>

          <Link
            href={`/${locale}#contacto`}
            className="inline-flex items-center group"
          >
            <span className="text-xl font-serif font-bold text-[#f7bd48] border-b-2 border-[#f7bd48] pb-1 group-hover:text-white group-hover:border-white transition-all">
              {isEs
                ? "Habla con nosotros sobre tu visa de artista →"
                : "Talk to us about your artist visa →"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
