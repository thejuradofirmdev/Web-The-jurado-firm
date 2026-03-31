"use client";

/**
 * 📧 NewsletterOptIn — Sección de subscripción al boletín
 */
export function NewsletterOptIn({ locale }: { locale: string }) {
  const isEs = locale === "es";

  return (
    <section className="bg-[#0d2340] py-24 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl text-white mb-6">
          {isEs
            ? "Suscríbete para recibir actualizaciones legales directas"
            : "Subscribe to receive direct legal updates"}
        </h2>
        <p className="text-slate-300 text-lg mb-10">
          {isEs
            ? "Mantente informado sobre los cambios de última hora en la política migratoria de EE.UU. No spam, solo información relevante."
            : "Stay informed about last-minute changes in US immigration policy. No spam, just relevant information."}
        </p>

        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={isEs ? "Tu correo electrónico" : "Your email address"}
            className="flex-grow px-6 py-4 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[#B8860B] outline-none transition-all"
            required
          />
          <button
            type="submit"
            className="px-10 py-4 bg-[#B8860B] text-white font-bold rounded-xl hover:bg-[#9A7209] transition-colors shrink-0 uppercase tracking-wider text-sm"
          >
            {isEs ? "Suscribirme" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
