import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

/**
 * 🦸 AboutHero — Hero de la página Sobre Nosotros
 * Imagen de oficina legal + overlay navy, título h1 grande y CTAs
 */
export function AboutHero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="relative h-[870px] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBmbYpzgjePWK7s0xzqlnZcWm6RTvn9MmIPmyoZ0AppingbifV1ADFRXfW1qyhYHYCRrnxYKux_DSbguD6KuRRTkG9g4n_J7veUe9ylVEsvyvNsWeaCelJa3Lue_3zOYXitC53SQU6zO8C0LxlJx5extWQQn4q9KwWW2XohtLUkSdr9OFVu0was08kHYWUvGe4GJPw6LXMUi-U4YoMlVhfPaWTPu0PlCG0dHVCnWFmSx8bND3RiZvusIhao6gUitKQ5duYN9xgvvSx"
          alt="High-end legal office interior"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay navy */}
        <div className="absolute inset-0 bg-[#0d2340]/80" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-[#f7bd48] font-semibold tracking-widest uppercase mb-4 text-sm">
            {isEs ? "Misión y Trayectoria" : "Mission and Track Record"}
          </span>
          <h1 className="text-white font-serif text-5xl md:text-7xl leading-tight mb-6">
            {isEs
              ? "Sobre Nosotros — Tu Historia es Nuestra Misión"
              : "About Us — Your Story is Our Mission"}
          </h1>
          <p className="text-[#e0e3e6] text-xl md:text-2xl leading-relaxed max-w-2xl mb-8">
            {isEs
              ? "Conoce la trayectoria de Carlos Jurado y el equipo que lucha por el futuro de tu familia en California con integridad y empatía."
              : "Meet Carlos Jurado's track record and the team that fights for your family's future in California with integrity and empathy."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}#contacto`}
              className="bg-[#fdc34d] text-[#271900] px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all"
            >
              {isEs ? "Habla con un Abogado" : "Talk to an Attorney"}
            </Link>
            <div className="flex items-center text-white/90 gap-2 px-4">
              <BadgeCheck className="h-5 w-5 text-[#f7bd48]" />
              <span className="font-medium">State Bar of California #342110</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
