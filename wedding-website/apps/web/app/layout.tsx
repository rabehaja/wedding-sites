import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
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

const london = localFont({
  src: "../public/fonts/london.woff2",
  variable: "--font-thin-serif",
  display: "swap",
});

const tenorsans = localFont({
  src: "../public/fonts/tenorsans.woff2",
  variable: "--font-tenor",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loic & Wiebke Wedding",
  description:
    "Join us for our wedding celebration on July 18, 2026 at Chateau de Blier, Belgium",
  keywords: ["wedding", "Loic", "Wiebke", "Chateau de Blier", "Belgium"],
  authors: [{ name: "Loic & Wiebke" }],
  openGraph: {
    title: "Loic & Wiebke Wedding",
    description:
      "Join us for our wedding celebration on July 18, 2026 at Chateau de Blier, Belgium",
    type: "website",
    locale: "en_US",
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${abramo.variable} ${london.variable} ${tenorsans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
