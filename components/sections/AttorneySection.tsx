import Image from "next/image";

/**
 * 👨‍⚖️ AttorneySection — Sección sobre Carlos Jurado
 * Card de foto con shadow + lista de credenciales, diseño del HTML de referencia
 */
export function AttorneySection({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-28 px-8 bg-white overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">

        {/* Foto del Abogado */}
        <div className="w-full md:w-1/2 relative">
          {/* Decoración blob */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#7b5800]/10 rounded-full blur-3xl" />
          <div className="relative z-10 p-4 bg-white shadow-2xl rounded-[40px]">
            <Image
              src="/images/carlos-jurado.png"
              alt="Carlos Jurado Abogado de Inmigración"
              width={600}
              height={800}
              className="w-full h-auto object-contain object-bottom pt-6 rounded-[32px]"
              unoptimized
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2">
          <span className="text-[#7b5800] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            {isEs ? "Fundador" : "Founder"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#000d22] mb-8 leading-tight">
            Carlos Jurado — {isEs ? "Tu Abogado, Tu Aliado." : "Your Attorney, Your Ally."}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {isEs
              ? "Con años de experiencia defendiendo los derechos de los inmigrantes en California, Carlos Jurado no solo es su representante legal, sino alguien que entiende los sacrificios de su familia."
              : "With years of experience defending the rights of immigrants in California, Carlos Jurado is not only your legal representative, but someone who understands your family's sacrifices."}
          </p>
          <ul className="space-y-6">
            {[
              isEs ? "Licenciado por la State Bar of California" : "Licensed by the State Bar of California",
              isEs ? "Miembro de la American Immigration Lawyers Association (AILA)" : "Member of the American Immigration Lawyers Association (AILA)",
              isEs ? "Atención 100% bilingüe y culturalmente consciente" : "100% bilingual and culturally conscious service",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#7b5800] bg-[#7b5800]/10 p-1 rounded-full text-lg leading-none">✓</span>
                <span className="font-semibold text-[#000d22]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
