import Link from "next/link";
import { Navbar, Footer } from "@repo/ui/organisms";
import { Typography } from "@repo/ui/atoms";
import { getTranslations } from "next-intl/server";

export default async function NotFoundPage(): Promise<React.ReactElement> {
  const t = await getTranslations("page-not-found");

  return (
    <>
      <Navbar
        navItems={[{ href: "/", label: "HOME" }]}
        rsvpItem={null}
      />
      <main
        id="main-content"
        className="min-h-[60vh] flex items-center justify-center py-16"
      >
        <div className="container max-w-2xl mx-auto px-4 text-center">
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
      <Footer
        weddingDate="November 14, 2026"
        navItems={[{ href: "/", label: "Home" }]}
      />
    </>
  );
}
