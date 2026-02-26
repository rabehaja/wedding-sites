import { Montserrat, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const abramo = localFont({
  src: "../public/fonts/abramo.woff2",
  variable: "--font-script",
  display: "swap",
});

export const london = localFont({
  src: "../public/fonts/london.woff2",
  variable: "--font-thin-serif",
  display: "swap",
});

export const tenorsans = localFont({
  src: "../public/fonts/tenorsans.woff2",
  variable: "--font-tenor",
  display: "swap",
});

export const fontVariables = `${montserrat.variable} ${playfair.variable} ${abramo.variable} ${london.variable} ${tenorsans.variable}`;
