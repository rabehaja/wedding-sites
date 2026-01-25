import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always", // Always show locale prefix for consistent behavior
});

export const config = {
  matcher: ["/", "/(de|fr|en)/:path*", "/((?!api|_next|.*\\..*).*)"],
};
