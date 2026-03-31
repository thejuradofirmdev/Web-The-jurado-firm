import { defineRouting } from 'next-intl/routing';

/**
 * 🗺️ Definición de routing para next-intl v4
 * Este archivo es el punto de verdad para los locales soportados
 */
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
});
