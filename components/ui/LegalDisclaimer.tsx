import { AlertCircle } from "lucide-react";

export function LegalDisclaimer({ variant = "general" }: { variant?: "general" | "testimonial" }) {
  if (variant === "testimonial") {
    return (
      <div className="mt-12 p-4 border border-gray-200 bg-gray-50 rounded-lg text-xs text-gray-500 max-w-4xl mx-auto flex gap-3">
        <AlertCircle className="w-5 h-5 text-gray-400 shrink-0" />
        <p className="leading-relaxed">
          <strong>Aviso Legal de Testimonios:</strong> Los testimonios, reseñas o aprobaciones presentados en esta página corresponden a resultados en casos anteriores gestionados por The Jurado Firm. Cada caso legal depende de sus propios hechos y circunstancias legales únicas, y los resultados descritos no constituyen una garantía de éxito en casos futuros. Esta información cumple con las reglas de publicidad del State Bar de California.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 p-4 text-xs text-gray-400 flex gap-2">
      <AlertCircle className="w-4 h-4 shrink-0" />
      <p>La información en este sitio web es solo introductoria y no debe interpretarse como asesoramiento legal formal ni establece una relación abogado-cliente.</p>
    </div>
  );
}
