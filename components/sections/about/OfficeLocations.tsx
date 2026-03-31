import Image from "next/image";
import { ExternalLink } from "lucide-react";

/**
 * 📍 OfficeLocations — 3 ubicaciones de la firma
 * Cards de oficinas con mapa en el header, y enlace a gmaps
 */
export function OfficeLocations({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const offices = [
    {
      city: "Long Beach",
      address: "444 W Ocean Blvd #800\nLong Beach, CA 90802",
      mapImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7wrf6BKW3iiL04KJPMtSd2YgwOF9OWdXAmJ-y7hWRj2BrhgFqaWF-_k4664dG6xKTGyJRwNDBtazWPBVACG5x5QbknxeaQHguocBwNLhzh4GVazAt_c-ez-muCvRHKNC6VNE3iipDSDdiLEPTX3xgVdB9mLthSk8qTvPsaGnu8H67iuCgfSIz8M1heEOsVJNyCl10ZYa6qq05EgFsRPCXqnBR5sfzaezJCSfvrnhk0JOGHr-Awoq8jxZED0qyKuvLCgB8qk8sR8B6",
      link: "https://maps.google.com",
    },
    {
      city: "Los Angeles",
      address: "700 S Flower St #1000\nLos Angeles, CA 90017",
      mapImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_bVr0adaHSoKZU54JVosf8ar8jW4ubP_9EJY0ZoQyf8kyTUvX6Ae8tNB7jLhkeok5BDpXk4lechA0jzqEsxvZZ_EHfg-QbsjLh826lHz4SQv-rB-iCskTcwSVGl2pnwHsi1ARNmYwdIJul3m6UGl3xb6GtrQjcG2bMEvpB1NaKr4-IiZLCjchkPW2DQ7QvyjgV6VKfOVxGc7f9hD5IT3bG34flx7O686LfiEUJyAMw-0RK8iGEo9MJKb40aSpoAgN5P4axRbrrfzw",
      link: "https://maps.google.com",
    },
    {
      city: "Bakersfield",
      address: "1430 Truxtun Ave #700\nBakersfield, CA 93301",
      mapImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPD5lr8v3t7AJHexQqa4ymJwMfDK2Ky2_dXqjlCC1KC1SkuW6MZ-PCVQzIvYExDBigj45ZEUyj5QonF6PRZnugpofsngXZCkcqYFuZZ85FOxYIT8LRq9tpjTcm5S_NtqW3b4CSsd9AGztgm1wIL35cjAmKCdKqXdHdikpYM00BRgvdhQRHr3vma2WJZezIa5ieyWppGCnW_ZGpxvx2mIsuJbKFLQ06HJKg8S6m6Vyf7VZYSFmMk7bpCs8YSgrTHfJ2qaDVzCWNxpz5",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section className="py-24 bg-[#f2f4f7]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-serif text-4xl text-[#000d22] mb-16 text-center">
          {isEs ? "Nuestras Oficinas" : "Our Locations"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(4,28,56,0.08)] group hover:-translate-y-1 transition-transform">
              {/* Encabezado Mapa */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={office.mapImg}
                  alt={`Map of ${office.city}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-[#000d22]/10" />
              </div>

              {/* Contenido info */}
              <div className="p-8">
                <h4 className="font-serif text-xl mb-4 text-[#000d22]">{office.city}</h4>
                <p className="text-gray-500 mb-6 leading-relaxed whitespace-pre-line">
                  {office.address}
                </p>
                <a
                  href={office.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000d22] font-bold flex items-center gap-2 hover:text-[#7b5800] transition-colors"
                >
                  {isEs ? "Ver en Mapa" : "View on Map"} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
