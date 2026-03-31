"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, ArrowRight } from "lucide-react";

/** 📋 Tipos de servicio disponibles */
const SERVICE_TYPES = ['family', 'citizenship', 'removal_defense', 'adjustment', 'other'] as const;

const heroFormSchema = z.object({
  fullName: z.string().min(2, "El nombre es muy corto").max(100),
  phone: z.string().regex(/^\d{7,15}$/, "Ingresa un número válido"),
  serviceType: z.enum(SERVICE_TYPES, {
    message: "Selecciona una opción válida",
  }),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;

/**
 * 📩 LeadForm — Formulario de captura de leads del Hero
 * Diseño Premium Navy/Gold siguiendo el HTML de referencia del cliente
 */
export function LeadForm({ locale }: { locale: string }) {
  const isEs = locale === "es";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
  });

  const onSubmit = async (data: HeroFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, message: "" }),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: "family", label: isEs ? "Reunificación Familiar" : "Family Reunification" },
    { value: "citizenship", label: isEs ? "Ciudadanía / Naturalización" : "Citizenship / Naturalization" },
    { value: "removal_defense", label: isEs ? "Defensa de Deportación" : "Removal Defense" },
    { value: "adjustment", label: isEs ? "Ajuste de Estatus (Green Card)" : "Adjustment of Status (Green Card)" },
    { value: "other", label: isEs ? "Otros" : "Other" },
  ];

  return (
    <div
      className="w-full max-w-md bg-white rounded-xl shadow-[0_20px_50px_rgba(4,28,56,0.12)] p-8 relative overflow-hidden"
      id="contacto"
    >
      {/* Acento lateral izquierdo */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#7b5800]" />

      {/* Header del card */}
      <div className="mb-8">
        <h3 className="text-[#000d22] font-serif text-2xl font-bold">
          {isEs ? "Consulta GRATUITA" : "FREE Consultation"}
        </h3>
        <p className="text-[#7b5800] font-semibold text-sm">
          {isEs ? "Inicia tu trámite hoy sin costo" : "Start your process today at no cost"}
        </p>
      </div>

      {isSuccess ? (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-xl font-bold mb-2 text-[#000d22]">
            {isEs ? "¡Mensaje Recibido!" : "Message Received!"}
          </h4>
          <p className="text-gray-600 text-sm">
            {isEs
              ? "Nos pondremos en contacto contigo lo antes posible."
              : "We will contact you as soon as possible."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Nombre */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              {isEs ? "Nombre Completo" : "Full Name"}
            </label>
            <input
              {...register("fullName")}
              placeholder={isEs ? "Ej. Juan Pérez" : "E.g. John Smith"}
              className="w-full px-4 py-3 rounded-lg bg-[#f2f4f7] focus:ring-2 focus:ring-[#7b5800]/20 focus:bg-white transition-all outline-none border-none"
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              {isEs ? "Teléfono" : "Phone"}
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="(562) 000-0000"
              className="w-full px-4 py-3 rounded-lg bg-[#f2f4f7] focus:ring-2 focus:ring-[#7b5800]/20 focus:bg-white transition-all outline-none border-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Servicio */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              {isEs ? "Servicio de Interés" : "Service of Interest"}
            </label>
            <select
              {...register("serviceType")}
              onChange={(e) =>
                setValue("serviceType", e.target.value as HeroFormValues["serviceType"], {
                  shouldValidate: true,
                })
              }
              className="w-full px-4 py-3 rounded-lg bg-[#f2f4f7] focus:ring-2 focus:ring-[#7b5800]/20 focus:bg-white transition-all outline-none border-none"
            >
              <option value="">{isEs ? "Selecciona una opción" : "Select an option"}</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="text-xs text-red-500 mt-1">{errors.serviceType.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#7b5800] hover:bg-[#5d4200] text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting
              ? isEs ? "Enviando..." : "Sending..."
              : isEs ? "Quiero mi consulta gratis" : "I want my free consultation"}
            {!isSubmitting && <ArrowRight className="h-5 w-5" />}
          </button>
        </form>
      )}

      {/* Disclaimer legal */}
      <p className="mt-6 text-[11px] text-gray-400 leading-relaxed text-center italic">
        {isEs
          ? "* Al enviar, aceptas ser contactado por The Jurado Firm para fines legales. Su información es estrictamente confidencial."
          : "* By submitting, you agree to be contacted by The Jurado Firm for legal purposes. Your information is strictly confidential."}
      </p>
    </div>
  );
}
