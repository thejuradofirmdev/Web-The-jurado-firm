import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

/**
 * 🦶 Footer — The Jurado Firm
 * Diseño del HTML de referencia: 4 columnas navy, disclaimer legal, links de política
 */
export function Footer({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <footer className="bg-[#000d22] text-white">
      {/* Columnas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        {/* Columna 1 — Marca */}
        <div className="space-y-6">
          <span className="text-2xl font-serif font-bold text-white">The Jurado Firm</span>
          <p className="text-[#778bad] text-sm leading-relaxed">
            {isEs
              ? "Comprometidos con la excelencia legal y la defensa de los derechos humanos en el sistema de inmigración de los Estados Unidos."
              : "Committed to legal excellence and the defense of human rights in the United States immigration system."}
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#778bad] hover:text-[#f7bd48] transition-colors">
              <span className="text-xl">📘</span>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#778bad] hover:text-[#f7bd48] transition-colors">
              <span className="text-xl">📸</span>
            </a>
          </div>
        </div>

        {/* Columna 2 — Links */}
        <div>
          <h4 className="font-serif font-bold text-[#f7bd48] mb-6">
            {isEs ? "Enlaces Rápidos" : "Quick Links"}
          </h4>
          <ul className="space-y-4 text-sm text-[#778bad]">
            {[
              { name: isEs ? "Inicio" : "Home", href: `/${locale}` },
              { name: isEs ? "Sobre Nosotros" : "About Us", href: `/${locale}/sobre-nosotros` },
              { name: isEs ? "Casos de Éxito" : "Success Cases", href: `/${locale}/casos-approved` },
              { name: isEs ? "Blog Legal" : "Legal Blog", href: `/${locale}/blog` },
              { name: isEs ? "Contacto" : "Contact", href: `/${locale}/contacto` },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Servicios */}
        <div>
          <h4 className="font-serif font-bold text-[#f7bd48] mb-6">
            {isEs ? "Servicios Populares" : "Popular Services"}
          </h4>
          <ul className="space-y-4 text-sm text-[#778bad]">
            {[
              isEs ? "Peticiones Familiares" : "Family Petitions",
              isEs ? "Residencia Permanente" : "Permanent Residency",
              isEs ? "Defensa Criminal e Inmigración" : "Criminal & Immigration Defense",
              isEs ? "Perdones (Waivers)" : "Waivers",
              isEs ? "DACA y Renovaciones" : "DACA & Renewals",
            ].map((s) => (
              <li key={s}>
                <a href="#" className="hover:text-white transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 — Contacto */}
        <div>
          <h4 className="font-serif font-bold text-[#f7bd48] mb-6">
            {isEs ? "Contacto" : "Contact"}
          </h4>
          <ul className="space-y-4 text-sm text-[#778bad]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#f7bd48] shrink-0 mt-0.5" />
              <span>
                Long Beach, California.
                <br />
                {isEs ? "Oficina Principal." : "Main Office."}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#f7bd48] shrink-0" />
              <a href="tel:18005705101" className="hover:text-white transition-colors">
                1(800) 570-5101
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#f7bd48] shrink-0" />
              <a href="mailto:contacto@juradofirm.com" className="hover:text-white transition-colors">
                contacto@juradofirm.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar — Disclaimer Legal */}
      <div className="border-t border-white/10 px-12 py-8 bg-[#0d2340]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-[#778bad] uppercase tracking-widest text-center md:text-left">
            Copyright {new Date().getFullYear()} The Jurado Firm. Licensed by the State Bar of California.
            <p className="mt-2 text-[10px] opacity-60 normal-case tracking-normal">
              {isEs
                ? "Legal Disclaimer: Este sitio web es solo para fines informativos. La relación abogado-cliente solo se forma después de un acuerdo firmado."
                : "Legal Disclaimer: This website is for informational purposes only. An attorney-client relationship is only formed after a signed agreement."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-[#778bad]">
            {[
              "Privacy Policy",
              "CCPA Compliance",
              "Legal Disclaimer",
            ].map((link) => (
              <a key={link} href="#" className="hover:text-[#f7bd48] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
