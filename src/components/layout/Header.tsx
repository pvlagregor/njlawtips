import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="bg-navy-900 sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tight hover:text-blue-300 transition-colors"
        >
          <span className="text-blue-300">NJ</span> Law Tips
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-light hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Free Consultation
        </Link>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
