"use client";

import { useState } from "react";
import { Search } from "lucide-react";

/**
 * 🎛️ BlogFilters — Barra sticky con tags de categorías y buscador
 */
export function BlogFilters({ locale }: { locale: string }) {
  const isEs = locale === "es";

  const categories = isEs
    ? ["Todos", "Reunificación Familiar", "Visas de Trabajo/Artistas", "DACA", "Asilo", "Noticias USCIS"]
    : ["All", "Family Reunification", "Work/Artist Visas", "DACA", "Asylum", "USCIS News"];

  const [activeCat, setActiveCat] = useState(categories[0]);

  return (
    <section className="px-4 sm:px-8 py-8 sm:py-12 bg-white border-b border-[#e6e8eb]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
        
        {/* Chips de categorías */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCat(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeCat === cat
                  ? "bg-[#000d22] text-white"
                  : "bg-[#f2f4f7] text-[#191c1e] hover:bg-[#e0e3e6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Buscador */}
        <div className="relative w-full md:w-64 shrink-0">
          <input
            type="text"
            placeholder={isEs ? "Buscar temas..." : "Search topics..."}
            className="w-full pl-10 pr-4 py-2 bg-[#f2f4f7] border-none rounded-full focus:ring-2 focus:ring-[#B8860B]/50 text-[#191c1e] outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

      </div>
    </section>
  );
}
