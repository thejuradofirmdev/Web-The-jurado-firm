import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

/**
 * 📚 BlogGrid — Grilla de artículos recientes + Sidebar derecho
 */
export function BlogGrid({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const posts = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvhahZTrCwRa9_QHrB-Gq4s2rbpW3j34hggT0REhFPeNAmeU-8zhPHAhmDw0sKGn4Jdv2hseXh5BiG0JaOB3z_Qboo2KVsIdoeOzLOBB8ch8ojHEFNOyDrgk9BZYPSHTj3OtasjlRr1OEzNa1EXhBmuPYg91GXbivYztmJAEqBMTJx8bAhBjml4Hg7lq_oKdWgaJat5Ie4zSYjSZB4njZY4r3yGAsCD0UE49bFQfqg0vnRUdNdacLDFG489-0XbCCXzdXZFw4vOqsN",
      tag: isEs ? "CONSEJOS LEGALES" : "LEGAL TIPS",
      title: isEs ? "Cómo prepararse para la entrevista de residencia" : "How to prepare for the residency interview",
      desc: isEs
        ? "Asegure su futuro con una preparación meticulosa. Repasamos las preguntas más frecuentes y la documentación vital."
        : "Secure your future with meticulous preparation. We review the most frequent questions and vital documentation.",
      date: "12 May, 2024",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDO--4es-tpyWeISe7FdlKjCv6i1MdOVnWFId128Q-kxzP-121DjtTL6mLPwPXbzPa3Iti7OWEGDT5QC8EHGGTnC1RnEskTRKckAuVQdsKmZv1M_f-dLZncHbjkwXsS1vGrWFESRiT9tKb7gxAORGJYAQr49LXJtUjEKsqkRJHl_PV61J1hJPT54-COMZWXQ1kNQxQT-X9_5wgw-pnm707Y1313zXl1K8lD8i9pbv8YK2oSki3nZ5HTNs01q0-jvCI312HaJQqJ26wW",
      tag: isEs ? "VISAS DE TALENTO" : "TALENT VISAS",
      title: isEs ? "Visas O-1: El camino para artistas hispanos en EE.UU." : "O-1 Visas: The path for Hispanic artists in the US",
      desc: isEs
        ? "Descubra cómo su talento extraordinario puede abrirle las puertas a una carrera legal en los Estados Unidos."
        : "Discover how your extraordinary talent can open doors to a legal career in the United States.",
      date: "08 May, 2024",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs8c0BPUlnukEXA1huSXWhOonNHRu72P7Q1OZDnnAZGlcmOS6JNxdx_owhKgF0YVcwQwOHd4F6KoVj0aybcHtMZ3UiMuf1YDF_zHDgS1vqW12s6nRGeOkgAMalq5gdVdo_E423hgi-G9jnZcqejxULfR0QFeMLAa5MJNbKJvWiWqewTWRm4IqWW5hPfl051ti7CAEq0Q2w8QBeeBka8V-1iRVqXjfIEMuRcgNXjeXI5Q2doiwASTdG5cjrnKXAjidlipcAq7TnNUTk",
      tag: isEs ? "CULTURA & LEY" : "CULTURE & LAW",
      title: isEs ? "La importancia de la atención bilingüe en casos legales" : "The importance of bilingual care in legal cases",
      desc: isEs
        ? "Por qué entender los matices culturales es tan importante como conocer los artículos de la ley federal."
        : "Why understanding cultural nuances is just as important as knowing the articles of federal law.",
      date: "02 May, 2024",
    },
  ];

  const popular = isEs
    ? [
        { topic: "Perdones Migratorios", count: 14 },
        { topic: "Ciudadanía por Naturalización", count: 9 },
        { topic: "Violence Against Women Act (VAWA)", count: 6 },
        { topic: "Ajuste de Estatus", count: 11 },
        { topic: "Cortes de Inmigración", count: 8 },
      ]
    : [
        { topic: "Immigration Waivers", count: 14 },
        { topic: "Citizenship by Naturalization", count: 9 },
        { topic: "Violence Against Women Act (VAWA)", count: 6 },
        { topic: "Adjustment of Status", count: 11 },
        { topic: "Immigration Courts", count: 8 },
      ];

  return (
    <section className="px-8 py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Columna Izquierda: Grid de Artículos */}
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="flex flex-col group cursor-pointer">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <span className="text-[#B8860B] text-sm font-bold mb-3">{post.tag}</span>
              <h3 className="font-serif text-2xl text-[#000d22] mb-4 group-hover:text-[#B8860B] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 mb-6 flex-grow">{post.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-400">{post.date}</span>
                <ArrowRight className="text-[#000d22] group-hover:translate-x-2 transition-transform h-5 w-5" />
              </div>
            </article>
          ))}

          {/* Quote de la fundadora (Placeholder del grid) */}
          <div className="bg-[#f2f4f7] p-10 rounded-2xl flex flex-col justify-center border-l-4 border-[#B8860B]">
            <p className="text-[#000d22] font-serif text-xl italic mb-4">
              {isEs
                ? '"El conocimiento es poder, especialmente cuando se trata de su estatus migratorio."'
                : '"Knowledge is power, especially when it comes to your immigration status."'}
            </p>
            <p className="font-bold text-[#000d22]">— Jessica Jurado, Esq.</p>
          </div>
        </div>

        {/* Columna Derecha: Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          
          {/* Temas populares */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6e8eb]">
            <h4 className="font-serif text-xl text-[#000d22] mb-6 border-b border-[#e6e8eb] pb-4">
              {isEs ? "Temas Populares" : "Popular Topics"}
            </h4>
            <ul className="space-y-4">
              {popular.map((item, idx) => (
                <li key={idx}>
                  <Link href="#" className="flex justify-between items-center text-gray-500 hover:text-[#B8860B] transition-colors">
                    <span>{item.topic}</span>
                    <span className="bg-[#f2f4f7] px-2 py-0.5 rounded text-xs font-bold text-gray-600">
                      {item.count.toString().padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Descarga de PDF Lead Magnet */}
          <div className="bg-[#0d2340] p-8 rounded-2xl text-white relative overflow-hidden group">
            <div className="z-10 relative">
              <h4 className="font-serif text-2xl mb-4 text-white">
                {isEs ? "Guía Gratuita 2024" : "Free 2024 Guide"}
              </h4>
              <p className="text-slate-300 mb-6">
                {isEs
                  ? "Descarga nuestro manual sobre Reunificación Familiar en California."
                  : "Download our manual on Family Reunification in California."}
              </p>
              <button className="w-full py-3 bg-[#B8860B] text-[#000d22] font-bold rounded-lg hover:scale-95 transition-all text-sm uppercase tracking-wider">
                {isEs ? "Descargar PDF" : "Download PDF"}
              </button>
            </div>
            {/* Ícono gigante de fondo */}
            <div className="absolute -bottom-10 -right-10 opacity-20 text-[#B8860B] group-hover:scale-110 transition-transform duration-500">
              <FileText className="w-48 h-48" />
            </div>
          </div>

        </aside>

      </div>
    </section>
  );
}
