"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Star, BadgeCheck } from "lucide-react";

const AREAS = ["family", "professional", "artist", "agricultural"] as const;
const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7),
  area: z.enum(AREAS),
  message: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

/**
 * 🦸 ServicesHero — Hero bilingüe de la página de Servicios
 * Fondo imagen bg-hero-pattern + card de conversión derecha
 */
export function ServicesHero({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const [done, setDone] = useState(false);
  const { register, handleSubmit, setValue } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data }),
      });
      setDone(true);
    } catch (e) { console.error(e); }
  };

  const areas = [
    { value: "family",       label: isEs ? "Inmigración Familiar"         : "Family Immigration" },
    { value: "professional", label: isEs ? "Profesional (H-1B, TN)"       : "Professional (H-1B, TN)" },
    { value: "artist",       label: isEs ? "Artista/Influencer (O-1, P)"  : "Artist/Influencer (O-1, P)" },
    { value: "agricultural", label: isEs ? "Agrícola (H-2A)"               : "Agricultural (H-2A)" },
  ];

  return (
    <header
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,13,34,0.95), rgba(0,13,34,0.4)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDa4bLuofvzQBEO1xxIzwgBpw0luAYhpq-epGYRS4W7CFXyeJ1lHgzv4H70sXXNYcX0fZ5RAYIx6lXJwEgzkKLy1D6-qbXtYw0GfsWFq0hhnGDfYlEfgy66Bse72LWWhdEmN64diGaeaBEo7uyaL4t_yxzAjIGV7ThSmy0BrUPUf0KTi2_gO-bsFUYbfa4oGrXNwwDeXpdwyjqloI92emSWbouxtkus1Fk59OnNHG0HXesnfQbrGphVSwS_-JB9gaz31wvk_awmGBOr)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Texto izquierdo */}
        <div>
          <span className="inline-block py-1 px-4 rounded-full bg-[#ffdea6] text-[#271900] text-xs font-bold tracking-widest uppercase mb-6">
            {isEs ? "Servicios Legales Integrados" : "Integrated Legal Services"}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-white leading-tight mb-8">
            {isEs
              ? "¿Tu familia o tu carrera merecen cruzar fronteras?"
              : "Does your family or career deserve to cross borders?"}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-10 max-w-xl">
            {isEs
              ? <>Expertos en unificar familias y potenciar trayectorias profesionales en los EE.UU. Especialidad líder en <span className="text-[#f7bd48] font-semibold italic">visas de entretenimiento</span> para el talento hispano.</>
              : <>Experts in unifying families and boosting professional careers in the USA. Leading specialty in <span className="text-[#f7bd48] font-semibold italic">entertainment visas</span> for Hispanic talent.</>}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex items-center space-x-3 text-white">
              <Star className="h-4 w-4 fill-[#f7bd48] text-[#f7bd48]" />
              <span className="text-sm font-medium italic">Google 5.0 Rating</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <BadgeCheck className="h-4 w-4 text-[#f7bd48]" />
              <span className="text-sm font-medium italic">State Bar of California</span>
            </div>
          </div>
        </div>

        {/* Card de conversión derecha */}
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-[#7b5800]">
          <h3 className="text-2xl font-serif font-bold text-[#000d22] mb-6">
            {isEs ? "Inicia tu Evaluación" : "Start Your Evaluation"}
          </h3>

          {done ? (
            <div className="text-center py-8">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="font-bold text-[#000d22]">{isEs ? "¡Mensaje enviado!" : "Message sent!"}</p>
              <p className="text-sm text-gray-500 mt-2">{isEs ? "Te contactaremos pronto." : "We'll contact you soon."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {isEs ? "Nombre Completo" : "Full Name"}
                </label>
                <input
                  {...register("fullName")}
                  placeholder={isEs ? "Ej. Juan Pérez" : "E.g. John Smith"}
                  className="w-full bg-[#f2f4f7] border-none rounded-lg focus:ring-2 focus:ring-[#7b5800]/50 py-3 px-4 outline-none"
                />
              </div>

              {/* Teléfono + Área */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {isEs ? "Teléfono" : "Phone"}
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-[#f2f4f7] border-none rounded-lg focus:ring-2 focus:ring-[#7b5800]/50 py-3 px-4 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    {isEs ? "Área de Interés" : "Area of Interest"}
                  </label>
                  <select
                    {...register("area")}
                    onChange={(e) => setValue("area", e.target.value as FormValues["area"], { shouldValidate: true })}
                    className="w-full bg-[#f2f4f7] border-none rounded-lg focus:ring-2 focus:ring-[#7b5800]/50 py-3 px-3 outline-none text-sm appearance-none"
                  >
                    {areas.map((a) => (
                      <option key={a.value} value={a.value}>{a.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {isEs ? "¿Cómo podemos ayudarte hoy?" : "How can we help you today?"}
                </label>
                <textarea
                  {...register("message")}
                  placeholder={isEs ? "Breve descripción de tu caso..." : "Brief description of your case..."}
                  className="w-full bg-[#f2f4f7] border-none rounded-lg focus:ring-2 focus:ring-[#7b5800]/50 py-3 px-4 outline-none text-sm h-24 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#7b5800] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-[#5d4200] transition-all flex items-center justify-center space-x-2"
              >
                <span>{isEs ? "SOLICITAR EVALUACIÓN" : "REQUEST EVALUATION"}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-[10px] text-center text-gray-400 italic">
                {isEs
                  ? "Confidencialidad garantizada bajo el privilegio abogado-cliente."
                  : "Confidentiality guaranteed under attorney-client privilege."}
              </p>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
