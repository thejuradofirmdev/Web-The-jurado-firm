"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

/**
 * 🧭 Navbar — The Jurado Firm
 * Sticky con blur, toggle de idioma (ES/EN pill) y botón CTA primario
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const currentPath = usePathname();
  const router = useRouter();
  const isEs = locale === "es";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** 🔀 Alterna entre ES y EN preservando la ruta actual */
  const toggleLang = () => {
    const nextLocale = isEs ? "en" : "es";
    let newPath = currentPath.replace(`/${locale}`, `/${nextLocale}`);
    if (!newPath.startsWith(`/${nextLocale}`)) newPath = `/${nextLocale}`;
    router.replace(newPath);
  };

  const navLinks = [
    { name: isEs ? "Inicio" : "Home", href: `/${locale}` },
    { name: isEs ? "Servicios" : "Services", href: `/${locale}/servicios`, hasDropdown: true },
    { name: isEs ? "Sobre Nosotros" : "About us", href: `/${locale}/sobre-nosotros` },
    { name: "Blog", href: `/${locale}/blog` },
  ];

  return (
    <>
      {/* ===== Barra de Navegación Principal ===== */}
      <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm">
        <nav className="flex justify-between items-center px-6 lg:px-10 py-4 max-w-full mx-auto">

          {/* Marca */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href={`/${locale}`} className="text-2xl font-serif font-bold text-[#000d22]">
              The Jurado Firm
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[1rem] font-semibold">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 transition-colors ${
                    currentPath === link.href
                      ? "text-[#7b5800] border-b-2 border-[#7b5800]"
                      : "text-gray-600 hover:text-[#7b5800]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              </div>
            ))}
          </div>

          {/* Controles Derecha */}
          <div className="flex items-center space-x-4">
            {/* Toggle ES / EN */}
            <button
              onClick={toggleLang}
              className="hidden sm:flex items-center bg-[#d5e3ff] rounded-full p-1 cursor-pointer select-none"
            >
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  isEs ? "bg-white text-[#000d22] shadow-sm" : "text-[#344766]"
                }`}
              >
                ES
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  !isEs ? "bg-white text-[#000d22] shadow-sm" : "text-[#344766]"
                }`}
              >
                EN
              </span>
            </button>

            {/* CTA Consulta gratuita */}
            <Link
              href={`/${locale}#contacto`}
              className="bg-gradient-to-br from-[#000d22] to-[#0d2340] text-white px-5 py-2.5 rounded-lg font-semibold hover:scale-95 transition-transform duration-150 text-sm whitespace-nowrap"
            >
              {isEs ? "Consulta Gratuita" : "Free Consultation"}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#000d22] hover:text-[#7b5800]"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-semibold text-[#000d22] border-b border-gray-50 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => { toggleLang(); setIsOpen(false); }}
                  className="w-full text-sm font-bold text-gray-500 border border-gray-200 rounded-lg p-3 hover:bg-gray-50"
                >
                  {isEs ? "Switch to English" : "Cambiar a Español"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 💬 WhatsApp Floating Button */}
      <a
        href="https://wa.me/18005705101"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] text-white p-4 shadow-xl hover:scale-110 transition-transform"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
