"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../../ui/navigation-menu";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

interface NavItem {
  readonly href: string;
  readonly label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "/venue", label: "THE VENUE" },
  { href: "/wedding", label: "THE WEDDING" },
  { href: "/weekend", label: "THE WEEKEND" },
  { href: "/accommodation", label: "ACCOMMODATION" },
];

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
}

export function Navbar({ className }: NavbarProps): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "bg-wedding-cream border-b border-wedding-neutral-200",
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
            <span className="font-script text-3xl md:text-4xl text-[#4A7C59]">
              L&W
            </span>
          </Link>

          {/* Desktop Navigation - using shadcn NavigationMenu */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm tracking-widest transition-colors px-2 py-1 rounded-sm",
                        "hover:text-wedding-purple hover:bg-transparent focus:bg-transparent",
                        pathname === item.href
                          ? "text-wedding-purple font-medium"
                          : "text-wedding-coral"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button - using shadcn Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-wedding-coral hover:text-wedding-purple hover:bg-wedding-lavender/20"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-2 px-4 rounded-md transition-colors text-sm tracking-widest",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wedding-purple",
                    pathname === item.href
                      ? "bg-wedding-lavender/30 text-wedding-purple font-medium"
                      : "text-wedding-coral hover:bg-wedding-lavender/20"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
