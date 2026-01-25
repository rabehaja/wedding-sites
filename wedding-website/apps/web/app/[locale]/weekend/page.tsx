"use client";

import { Navbar, PageHero, ContentSection, Footer } from "@repo/ui/organisms";
import {
  Typography,
  RingsIcon,
  ChampagneIcon,
  UtensilsIcon,
  CakeIcon,
  MusicIcon,
  MapPinIcon,
  SunIcon,
  WaveIcon,
  BackToTop,
} from "@repo/ui/atoms";
import {
  TimelineItem,
  SectionHeader,
  WeekendDayCard,
} from "@repo/ui/molecules";
import { useTranslations } from "next-intl";

export default function WeekendPage(): React.ReactElement {
  const t = useTranslations("weekend");
  const tHome = useTranslations("home");

  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          title={t("title")}
          subtitle={t("subtitle")}
          shape="wave"
          invertColors
        />

        <ContentSection>
          <Typography variant="body" color="muted" className="text-center">
            {t("introText")}
          </Typography>
        </ContentSection>

        {/* Quick Overview Section */}
        <section className="py-12 bg-wedding-coral-50/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-4">
              <Typography variant="h2" className="font-serif">
                {t.rich("atAGlance", {
                  ata: () => <span className="font-script text-7xl text-wedding-purple-500">{t("ata")}</span>,
                })}
              </Typography>
              <Typography variant="body" color="muted" className="mt-2">
                {t("scheduleOverview")}
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <WeekendDayCard
                dayName={tHome("friday")}
                date={`${tHome("month")} 17`}
                href="#friday"
                highlights={[
                  { icon: <MapPinIcon />, text: t("arrivalCheckin") },
                  { icon: <ChampagneIcon />, text: t("welcomeDrinks") },
                ]}
              />
              <WeekendDayCard
                dayName={tHome("saturday")}
                date={`${tHome("month")} 18`}
                featured
                href="#saturday"
                highlights={[
                  { icon: <SunIcon />, text: t("freeTimeBreakfast") },
                  { icon: <RingsIcon />, text: t("ceremonyReception") },
                  { icon: <MusicIcon />, text: t("dancingAllNight") },
                ]}
              />
              <WeekendDayCard
                dayName={tHome("sunday")}
                date={`${tHome("month")} 19`}
                href="#sunday"
                highlights={[
                  { icon: <UtensilsIcon />, text: t("farewellBrunch") },
                  { icon: <WaveIcon />, text: t("departure") },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Packlist Section */}
        <section id="packlist" className="py-16">
          <div className="container max-w-3xl mx-auto px-4">
            <SectionHeader
              title={t("packlist")}
              subtitle={t("packlistSubtitle")}
            />
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-wedding-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>{t("packlistItem1")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>{t("packlistItem2")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>{t("packlistItem3")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>
                  <strong>{t("packlistItem4")}</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>{t("packlistItem5")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-wedding-coral-500 mt-0.5">✓</span>
                <span>{t("packlistItem6")}</span>
              </li>
            </ul>
            <Typography
              variant="body"
              color="muted"
              className="mt-6 text-sm italic"
            >
              {t("packlistNote")}
            </Typography>
          </div>
        </section>

        {/* Friday Timeline */}
        <section id="friday" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  {t.rich("fridayTitle", { date: () => <span className="font-script text-7xl">{tHome("month")} 17</span> })}
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  {t("arrivalDay")}
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                {t("fridayIntro")}
              </Typography>
              <ol className="mt-8" aria-label="Friday schedule">
                <TimelineItem
                  time="From 5:00 PM"
                  title={t("arrivalCheckin")}
                  description={t("arrivalCheckinDesc")}
                  icon={<MapPinIcon />}
                />
                <TimelineItem
                  time="7:00 PM"
                  title={t("welcomeDrinksDinnerTitle")}
                  description={t("welcomeDrinksDinnerDesc")}
                  icon={<ChampagneIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Saturday Timeline - Full Detailed Schedule */}
        <section id="saturday" className="py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  {t.rich("saturdayTitle", { date: () => <span className="font-script text-7xl">{tHome("month")} 18</span> })}
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  {t("weddingDay")}
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                {t("saturdayIntro")}
              </Typography>

              {/* Quick reference banner */}
              <div className="mt-6 mb-8 p-4 bg-wedding-coral-50/50 rounded-lg border border-wedding-coral-100">
                <a
                  href="/#info-cards"
                  className="flex items-center justify-between text-sm group"
                >
                  <span className="text-wedding-neutral-600">
                    <span className="font-medium text-wedding-neutral-700">
                      {t("quickReference")}
                    </span>{" "}
                    {t("dressCodePhotoGifts")}
                  </span>
                  <span className="text-wedding-coral-500 group-hover:text-wedding-coral-600 transition-colors">
                    {t("view")} →
                  </span>
                </a>
              </div>

              <ol aria-label="Saturday schedule">
                <TimelineItem
                  time="9:30 - 11:00 AM"
                  title={t("brunch")}
                  description={t("brunchDesc")}
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="3:00 PM"
                  title={t("weddingCeremony")}
                  description={t("weddingCeremonyDesc")}
                  icon={<RingsIcon />}
                />
                <TimelineItem
                  time="3:30 PM"
                  title={t("cocktailReception")}
                  description={t("cocktailReceptionDesc")}
                  icon={<ChampagneIcon />}
                />
                <TimelineItem
                  time="6:00 PM"
                  title={t("dinner")}
                  description={t("dinnerDesc")}
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="8:00 PM"
                  title={t("cakeCutting")}
                  description={t("cakeCuttingDesc")}
                  icon={<CakeIcon />}
                />
                <TimelineItem
                  time="8:15 PM"
                  title={t("firstDanceParty")}
                  description={t("firstDancePartyDesc")}
                  icon={<MusicIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>

        {/* Sunday Timeline */}
        <section id="sunday" className="py-16 bg-wedding-neutral-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <Typography variant="h2" className="font-serif">
                  {t.rich("sundayTitle", { date: () => <span className="font-script text-7xl">{tHome("month")} 19</span> })}
                </Typography>
                <Typography variant="body" color="muted" className="mt-2">
                  {t("farewellDay")}
                </Typography>
              </div>
              <Typography
                variant="body"
                color="muted"
                className="mt-4 text-center max-w-xl mx-auto"
              >
                {t("sundayIntro")}
              </Typography>
              <ol className="mt-8" aria-label="Sunday schedule">
                <TimelineItem
                  time="9:00 - 10:30 AM"
                  title={t("postWeddingBreakfast")}
                  description={t("postWeddingBreakfastDesc")}
                  icon={<UtensilsIcon />}
                />
                <TimelineItem
                  time="11:00 AM"
                  title={t.rich("checkoutFarewell", {
                    farewell: () => <span className="font-script text-6xl font-light text-wedding-purple-500">{t("farewell")}</span>,
                  })}
                  description={t("checkoutFarewellDesc")}
                  icon={<WaveIcon />}
                  isLast
                />
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
