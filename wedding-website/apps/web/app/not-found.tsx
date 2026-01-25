import Image from "next/image";
import Link from "next/link";
import { Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { cookies, headers } from "next/headers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const abramo = localFont({
  src: "../public/fonts/abramo.woff2",
  variable: "--font-script",
  display: "swap",
});

// Translations for the 404 page
const translations = {
  en: {
    title: "Page Not Found",
    subtitle: "Oops! Lost in the Ardennes?",
    message: "The page you're looking for doesn't exist or has been moved.",
    backHome: "Back to Home",
  },
  de: {
    title: "Seite nicht gefunden",
    subtitle: "Hoppla! In den Ardennen verirrt?",
    message:
      "Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.",
    backHome: "Zurück zur Startseite",
  },
  fr: {
    title: "Page non trouvée",
    subtitle: "Oups ! Perdu dans les Ardennes ?",
    message: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'accueil",
  },
};

type Locale = keyof typeof translations;

async function getLocale(): Promise<Locale> {
  // Try to get locale from cookie
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  if (localeCookie && localeCookie.value in translations) {
    return localeCookie.value as Locale;
  }

  // Try to detect from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  if (acceptLanguage.includes("de")) return "de";
  if (acceptLanguage.includes("fr")) return "fr";

  // Default to English
  return "en";
}

export default async function RootNotFound(): Promise<React.ReactElement> {
  const locale = await getLocale();
  const t = translations[locale];

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${playfair.variable} ${abramo.variable}`}
    >
      <body className="font-sans antialiased bg-wedding-cream-50">
        <main className="min-h-screen flex items-center justify-center py-16">
          <div className="container max-w-2xl mx-auto px-4 text-center">
            <div className="mb-8">
              <Image
                src="/images/not-found.png"
                alt="Page not found"
                width={300}
                height={300}
                className="mx-auto"
                priority
              />
            </div>
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
