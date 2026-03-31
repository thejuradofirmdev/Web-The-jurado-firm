import Image from "next/image";

/**
 * 📰 BlogHero — Header hero de la página de Blog
 * Asymmetric layout: texto a la izquierda, imagen en landscape a la derecha con quote
 */
export function BlogHero({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <header className="relative overflow-hidden px-4 sm:px-8 py-16 sm:py-20 lg:py-32 bg-[#f7f9fc]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Texto Izquierdo */}
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#B8860B]/10 text-[#B8860B] rounded-full">
            {isEs ? "Educación y Actualidad" : "Education & News"}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#000d22] leading-tight mb-6 sm:mb-8">
            {isEs
              ? "Blog Legal — Tu Guía en el Camino Migratorio"
              : "Legal Blog — Your Guide on the Immigration Journey"}
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            {isEs
              ? "Información clara, bilingüe y actualizada sobre leyes de inmigración en California."
              : "Clear, bilingual, and updated information on immigration laws in California."}
          </p>
        </div>

        {/* Imagen Derecha */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH8Vhg5W1sUuLEVPpwVg0H9Qn2BpBHwFwvxxPE5NtNXA57Y7nHJmy58M7E0dnOB4mi_1z1sHFNI2OLediVEHFkYcd7X0ph2rBRNh5rGLZ-wVakOxeTfCshMc-NENkfbRBkuCsWP0dzddxQmjFRF2Ci4szcfKE3oIxcWMSK3BI0X2fncE5U1VBdsw0gx0ftVQgWGpxLEOrXNBT3evx8m-l-ry6btHsq8VlqiPZXeA-7sPHfyRK9Bybw0JaHSxq2oEOlxF0aexyDnPY4"
              alt="High-end legal office"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          {/* Quote Card (Escondido en móvil según diseño) */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] max-w-xs hidden md:block">
            <p className="italic font-serif text-[#000d22] text-lg">
              {isEs
                ? '"Nuestra misión es humanizar la ley federal para cada familia que servimos."'
                : '"Our mission is to humanize federal law for every family we serve."'}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
