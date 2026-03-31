import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

/**
 * 🛡️ Middleware de internacionalización compatible con next-intl v4
 * Usa los locales y defaultLocale definidos en i18n.ts
 */
export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  // 🔒 Excluir rutas de API, _next y archivos estáticos
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
