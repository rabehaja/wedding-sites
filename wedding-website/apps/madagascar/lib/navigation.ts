interface NavItem {
  readonly href: string;
  readonly label: string;
  readonly children?: readonly NavItem[];
}

export function getNavItems(
  locale: string,
  tNav: (key: string) => string
): NavItem[] {
  return [
    { href: `/${locale}`, label: tNav("home") },
    {
      href: `/${locale}/essential-travel-tips`,
      label: tNav("essentialTravelTips"),
    },
    {
      href: `/${locale}/plan-your-trip`,
      label: tNav("planATour"),
      children: [
        {
          href: `/${locale}/plan-your-trip/the-north`,
          label: tNav("regionNorth"),
        },
        {
          href: `/${locale}/plan-your-trip/the-south`,
          label: tNav("regionSouth"),
        },
        {
          href: `/${locale}/plan-your-trip/the-east`,
          label: tNav("regionEast"),
        },
        {
          href: `/${locale}/plan-your-trip/the-west`,
          label: tNav("regionWest"),
        },
        {
          href: `/${locale}/plan-your-trip/the-center`,
          label: tNav("regionCenter"),
        },
      ],
    },
  ];
}
