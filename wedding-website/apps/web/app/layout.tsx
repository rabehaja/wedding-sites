import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loic & Wiebke Wedding",
  description:
    "Join us for our wedding celebration on July 18, 2026 at Château de Blier, Belgium",
  keywords: ["wedding", "Loic", "Wiebke", "Château de Blier", "Belgium"],
  authors: [{ name: "Loic & Wiebke" }],
  openGraph: {
    title: "Loic & Wiebke Wedding",
    description:
      "Join us for our wedding celebration on July 18, 2026 at Château de Blier, Belgium",
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
