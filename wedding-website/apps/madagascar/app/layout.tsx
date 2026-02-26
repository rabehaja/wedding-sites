import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loic & Wiebke - Madagascar Celebration",
  description:
    "Join us for our wedding celebration on November 14, 2026 in Madagascar",
  keywords: ["wedding", "Loic", "Wiebke", "Madagascar", "celebration"],
  authors: [{ name: "Loic & Wiebke" }],
  openGraph: {
    title: "Loic & Wiebke - Madagascar Celebration",
    description:
      "Join us for our wedding celebration on November 14, 2026 in Madagascar",
    type: "website",
  },
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return children as React.ReactElement;
}
