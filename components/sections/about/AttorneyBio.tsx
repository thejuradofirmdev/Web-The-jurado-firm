import Image from "next/image";

/**
 * 👨‍⚖️ AttorneyBio — Sección biográfica de Carlos Jurado
 * Foto grayscale/hover, card flotante con nombre, bio extendida y cita
 */
export function AttorneyBio({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="py-24 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Foto con efectos */}
        <div className="relative">
          {/* Blob decorativo */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffdea6] opacity-20 rounded-full blur-3xl" />

          {/* Foto con borde asimétrico */}
          <div className="rounded-tl-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(4,28,56,0.08)]">
            <Image
              src="/images/carlos-jurado.png"
              alt="Carlos Jurado — Abogado de Inmigración"
              width={700}
              height={850}
              className="w-full h-auto object-contain object-bottom"
              unoptimized
            />
          </div>

          {/* Card flotante inferior derecha */}
          <div className="absolute -bottom-6 -right-6 bg-[#000d22] p-8 rounded-xl text-white shadow-2xl">
            <div className="text-3xl font-serif mb-1">Carlos Jurado</div>
            <div className="text-[#f7bd48] font-medium tracking-wide">
              {isEs ? "Abogado Principal" : "Lead Attorney"}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl text-[#000d22] mb-4">
              Carlos Jurado — {isEs ? "Abogado de Inmigración, Aliado de la Comunidad" : "Immigration Attorney, Community Ally"}
            </h2>
            <div className="w-20 h-1 bg-[#7b5800] rounded-full" />
          </div>

          <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
            <p>
              {isEs
                ? "Como hijo de inmigrantes, el Licenciado Carlos Jurado entiende que un caso de inmigración no es solo un trámite legal, es el futuro de toda una familia. Su conexión profunda con la comunidad hispana en California ha forjado un despacho donde la Autoridad Empática es el pilar fundamental."
                : "As the son of immigrants, Attorney Carlos Jurado understands that an immigration case is not just a legal process—it is the future of an entire family. His deep connection with the Hispanic community in California has forged a firm where Empathetic Authority is the fundamental pillar."}
            </p>
            <p>
              {isEs
                ? "Egresado con honores y miembro activo de la Asociación Americana de Abogados de Inmigración (AILA), Carlos ha dedicado más de una década a defender derechos en cortes federales y estatales, logrando que miles de familias permanezcan unidas."
                : "A graduate with honors and active member of the American Immigration Lawyers Association (AILA), Carlos has dedicated more than a decade to defending rights in federal and state courts, ensuring thousands of families remain together."}
            </p>

            {/* Cita */}
            <blockquote className="border-l-4 border-[#7b5800] pl-6 py-2 italic text-[#000d22] font-medium text-xl">
              {isEs
                ? '"Mi meta no es solo ganar casos, es devolverle la tranquilidad a quienes han trabajado duro por su lugar en este país."'
                : '"My goal is not just to win cases, it\'s to restore peace of mind to those who have worked hard for their place in this country."'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
