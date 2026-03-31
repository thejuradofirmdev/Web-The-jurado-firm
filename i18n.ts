import { getRequestConfig } from 'next-intl/server';

/**
 * 🌍 Localización — next-intl v4 compatible
 * Usa requestLocale (async) en vez del antiguo `locale` de v3
 */
export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es';

export default getRequestConfig(async ({ requestLocale }) => {
  // Obtener el locale actual de la request (API next-intl v4)
  let locale = await requestLocale;

  // Fallback seguro al locale predeterminado si no es válido
  if (!locale || !(locales as readonly string[]).includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
