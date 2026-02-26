import Link from "next/link";
import { cookies, headers } from "next/headers";
import { fontVariables } from "../lib/fonts";
import "./globals.css";

const translations = {
  en: {
    title: "Page Not Found",
    subtitle: "Oops! Lost in Madagascar?",
    message: "The page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home",
  },
  de: {
    title: "Seite nicht gefunden",
    subtitle: "Hoppla! In Madagaskar verirrt?",
    message:
      "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
    backHome: "Zurück zur Startseite",
  },
  fr: {
    title: "Page non trouvée",
    subtitle: "Oups ! Perdu à Madagascar ?",
    message: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
};

type Locale = keyof typeof translations;

async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  if (localeCookie && localeCookie.value in translations) {
    return localeCookie.value as Locale;
  }

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  if (acceptLanguage.includes("de")) return "de";
  if (acceptLanguage.includes("fr")) return "fr";

  return "en";
}

export default async function RootNotFound(): Promise<React.ReactElement> {
  const locale = await getLocale();
  const t = translations[locale];

  return (
    <html
      lang={locale}
      className={fontVariables}
    >
      <body className="font-sans antialiased bg-wedding-cream-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-wedding-purple focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <main id="main-content" className="min-h-screen flex items-center justify-center py-16">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl text-wedding-neutral-700 mb-2">
              {t.title}
            </h1>
            <p className="text-wedding-neutral-500 text-lg mb-4">
              {t.subtitle}
            </p>
            <p className="text-wedding-neutral-500 mb-8">{t.message}</p>
            <Link
              href={`/${locale}`}
              className="inline-flex px-6 py-3 rounded-full bg-wedding-coral-500 text-white font-medium hover:bg-wedding-coral-600 transition-colors"
            >
              {t.backHome}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
