import * as z from 'zod';

export const leadFormSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido" }),
  phone: z.string().min(10, { message: "Número de teléfono inválido" }),
  serviceType: z.string().min(1, { message: "Seleccione el tipo de servicio" }),
  message: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
