"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { useTranslations } from "next-intl";

export default function NotFoundPage(): React.ReactElement {
  const t = useTranslations("page-not-found");

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-[60vh] flex items-center justify-center py-16"
      >
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

          <Typography variant="h1" className="font-serif text-4xl mb-2">
            {t("title")}
          </Typography>

          <Typography variant="body" color="muted" className="text-lg mb-4">
            {t("subtitle")}
          </Typography>

          <Typography variant="body" color="muted" className="mb-8">
            {t("message")}
          </Typography>

          <Link
            href="/"
            className="inline-flex px-6 py-3 rounded-full bg-wedding-coral-500 text-white font-medium hover:bg-wedding-coral-600 transition-colors"
          >
            {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
