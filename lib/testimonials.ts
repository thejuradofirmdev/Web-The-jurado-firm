export interface Testimonial {
  name: string;
  type: string;
  quoteEs: string;
  quoteEn: string;
}

export const testimonialsList: Testimonial[] = [
  {
    name: "Juan Martinez",
    type: "Ajuste de Estatus",
    quoteEs: "Gracias a Carlos Jurado, mi familia por fin está reunida en California. El proceso fue transparente y sin tarifas ocultas.",
    quoteEn: "Thanks to Carlos Jurado, my family is finally reunited in California. The process was transparent with no hidden fees."
  },
  {
    name: "Elena G.",
    type: "Defensa de Deportación",
    quoteEs: "Pensé que mi caso estaba perdido, pero The Jurado Firm peleó por mí y ganamos en la corte. Mil bendiciones para todo el equipo.",
    quoteEn: "I thought my case was lost, but The Jurado Firm fought for me and we won in court. A thousand blessings to the whole team."
  },
  {
    name: "Miguel Rodríguez",
    type: "Visa de Trabajo Inversionista",
    quoteEs: "El nivel de profesionalismo de Carlos es incomparable. Siempre estuvo accesible y respondió mis dudas en 24 horas o menos.",
    quoteEn: "Carlos' level of professionalism is unmatched. He was always accessible and answered my questions in 24 hours or less."
  }
];
