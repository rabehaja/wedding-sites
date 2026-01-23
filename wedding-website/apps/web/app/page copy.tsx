import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "The Venue" },
  { href: "/wedding", label: "The Wedding" },
  { href: "/weekend", label: "The Weekend" },
  { href: "/accommodation", label: "Accommodation" },
];

export default function HomePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative curved shape - pink background element */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[80%] bg-[#e9b6f7] rounded-bl-[50%] -z-10 opacity-30"
        aria-hidden="true"
      />

      {/* Navigation - Pink serif font */}
      <nav className="py-8 px-4">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 font-serif text-base md:text-lg text-[#e9b6f7]">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-[#d89def] transition-colors py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center py-8 md:py-12 px-4 text-center max-w-4xl mx-auto">
        {/* Script Heading */}
        <h1 className="font-script text-3xl md:text-4xl lg:text-5xl text-[#000000] mb-6 md:mb-8">
          Join us for our wedding celebrations
        </h1>

        {/* Couple Photo - Rounded/styled */}
        <div className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] mb-8 md:mb-10 rounded-[2.5rem] overflow-hidden shadow-xl">
          <Image
            src="/images/hero-couple.jpg"
            alt="Loïc & Wiebke"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Couple Names */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#e9b6f7] tracking-wider mb-6 md:mb-8">
          Loïc & Wiebke
        </h2>

        {/* Date Display - Horizontal with specific colors */}
        <div className="flex items-baseline justify-center gap-2 md:gap-4 mb-4 md:mb-6">
          <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#f1f1ec] drop-shadow-sm" style={{ WebkitTextStroke: '1px #d4d4c8' }}>
            july
          </span>
          <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#e66b3d] font-medium">
            18
          </span>
          <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#e66b3d]">
            2026
          </span>
        </div>

        {/* Venue */}
        <p className="font-serif text-lg md:text-xl lg:text-2xl tracking-wide text-[#3c3333] mb-6 md:mb-8">
          Chateau de Blier, Belgium
        </p>

        {/* Description paragraph */}
        <p className="text-base md:text-lg text-[#3c3333] max-w-2xl mb-8 md:mb-10 leading-relaxed">
          We are finally getting married and we are thrilled to invite you to our wedding.
          Join us at the magnificent Château de Blier in Erezee, Belgium on 18 July 2026
          for our wedding celebration.
        </p>

        {/* RSVP Button - Pink */}
        <Link
          href="/rsvp"
          className="px-10 md:px-12 py-4 md:py-5 bg-[#e9b6f7] text-white rounded-lg text-lg md:text-xl font-medium hover:bg-[#d89def] transition-colors shadow-lg uppercase tracking-wider"
        >
          RSVP
        </Link>
      </section>
    </main>
  );
}
