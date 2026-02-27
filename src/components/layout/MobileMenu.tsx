"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy-900 border-t border-white/10 py-4 px-6 z-50">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-light hover:text-white py-3 border-b border-white/10 last:border-0 text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-6 rounded font-semibold transition-colors"
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
