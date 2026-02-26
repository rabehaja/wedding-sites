"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../../ui/navigation-menu";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavItem {
  readonly href: string;
  readonly label: string;
  readonly children?: readonly NavItem[];
}

function MenuIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon(): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

interface NavbarProps {
  readonly className?: string;
  readonly navItems?: readonly NavItem[];
  readonly rsvpItem?: NavItem | null;
}

function ChevronDown({ className }: { readonly className?: string }): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Navbar({ className, navItems: navItemsProp, rsvpItem: rsvpItemProp }: NavbarProps): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useTranslations("nav");

  const navItems = navItemsProp ?? [
    { href: "/", label: "HOME" },
    { href: "/venue", label: t("venue") },
    { href: "/weekend", label: t("weekend") },
    { href: "/accommodation", label: t("accommodation") },
    { href: "/surrounding", label: t("surrounding") },
    { href: "/madagascar", label: t("madagascar") },
  ];
  const rsvpItem = rsvpItemProp !== undefined ? rsvpItemProp : { href: "/rsvp", label: t("rsvp") };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "relative z-50 bg-wedding-cream border-b border-wedding-neutral-200",
        className
      )}
    >
      <nav
        className="container mx-auto px-4 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo - Script font */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple focus-visible:ring-offset-2 rounded"
          >
            <span className="font-script text-3xl md:text-4xl text-wedding-green">
              L&W
            </span>
          </Link>

          {/* Desktop Navigation - using shadcn NavigationMenu */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-6">
              {navItems.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger
                      className={cn(
                        "relative text-sm tracking-widest px-2 py-1 rounded-sm font-thin-serif bg-transparent",
                        "transition-colors duration-300 motion-reduce:transition-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2",
                        "hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent",
                        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-wedding-purple-600",
                        "after:transition-all after:duration-300 after:ease-out motion-reduce:after:transition-none",
                        pathname.startsWith(item.href)
                          ? "text-wedding-purple-600 font-medium after:w-full"
                          : "text-wedding-purple-500 hover:text-wedding-purple-600 after:w-0 hover:after:w-full"
                      )}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[200px]">
                      <ul className="flex flex-col gap-1 p-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block px-3 py-2 rounded-md text-sm tracking-wider font-thin-serif whitespace-nowrap",
                                  "transition-colors duration-200",
                                  "hover:bg-wedding-purple-50 focus:bg-wedding-purple-50",
                                  pathname === child.href
                                    ? "text-wedding-purple-600 font-medium bg-wedding-purple-50"
                                    : "text-wedding-purple-500 hover:text-wedding-purple-600"
                                )}
                              >
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "relative text-sm tracking-widest px-2 py-1 rounded-sm font-thin-serif",
                          "transition-colors duration-300 motion-reduce:transition-none",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2",
                          "hover:bg-transparent focus:bg-transparent",
                          "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-wedding-purple-600",
                          "after:transition-all after:duration-300 after:ease-out motion-reduce:after:transition-none",
                          pathname === item.href
                            ? "text-wedding-purple-600 font-medium after:w-full"
                            : "text-wedding-purple-500 hover:text-wedding-purple-600 after:w-0 hover:after:w-full"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side: Language Switcher + RSVP CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher - Desktop */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* RSVP CTA Button - Desktop */}
            {rsvpItem && (
              <Link
                href={rsvpItem.href}
                className={cn(
                  "hidden lg:inline-flex px-5 py-2 rounded-full font-medium text-sm tracking-wide",
                  "transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-coral-500 focus-visible:ring-offset-2",
                  pathname === rsvpItem.href
                    ? "bg-wedding-coral-600 text-white"
                    : "bg-wedding-coral-500 text-white hover:bg-wedding-coral-600 hover:scale-105"
                )}
              >
                {rsvpItem.label}
              </Link>
            )}

            {/* Mobile Menu Button - using shadcn Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-wedding-purple-500 hover:text-wedding-purple-600 hover:bg-wedding-purple-50"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <ul className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "flex-1 block py-2 px-4 rounded-md text-sm tracking-widest font-thin-serif",
                          "transition-all duration-300 motion-reduce:transition-none",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2",
                          pathname.startsWith(item.href)
                            ? "bg-wedding-purple-100 text-wedding-purple-600 font-medium border-l-4 border-wedding-purple-500"
                            : "text-wedding-purple-500 hover:bg-wedding-purple-50 hover:text-wedding-purple-600"
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setExpandedMobileItem(expandedMobileItem === item.href ? null : item.href)}
                        className="p-2 text-wedding-purple-500 hover:text-wedding-purple-600"
                        aria-label={expandedMobileItem === item.href ? "Collapse sub-menu" : "Expand sub-menu"}
                        aria-expanded={expandedMobileItem === item.href}
                      >
                        <ChevronDown
                          className={cn(
                            "transition-transform duration-200",
                            expandedMobileItem === item.href && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                    <ul
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        expandedMobileItem === item.href ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeMobileMenu}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block py-2 pl-8 pr-4 rounded-md text-sm tracking-widest font-thin-serif",
                              "transition-all duration-300 motion-reduce:transition-none",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2",
                              pathname === child.href
                                ? "text-wedding-purple-600 font-medium"
                                : "text-wedding-purple-400 hover:text-wedding-purple-600"
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={cn(
                      "block py-2 px-4 rounded-md text-sm tracking-widest font-thin-serif",
                      "transition-all duration-300 motion-reduce:transition-none",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple-500 focus-visible:ring-offset-2",
                      pathname === item.href
                        ? "bg-wedding-purple-100 text-wedding-purple-600 font-medium border-l-4 border-wedding-purple-500"
                        : "text-wedding-purple-500 hover:bg-wedding-purple-50 hover:text-wedding-purple-600"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Language Switcher - Mobile (moved before RSVP so dropdown doesn't overlap) */}
            <li className="mt-4 pt-4 border-t border-wedding-neutral-200">
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </li>

            {/* RSVP as highlighted CTA button */}
            {rsvpItem && (
              <li className="mt-4">
                <Link
                  href={rsvpItem.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-3 px-4 rounded-lg text-center font-medium text-sm tracking-widest",
                    "transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-coral-500 focus-visible:ring-offset-2",
                    pathname === rsvpItem.href
                      ? "bg-wedding-coral-600 text-white"
                      : "bg-wedding-coral-500 text-white hover:bg-wedding-coral-600"
                  )}
                >
                  {rsvpItem.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
