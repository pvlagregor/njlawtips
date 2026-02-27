import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-text-muted">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-lg mb-3">
              <span className="text-blue-300">NJ</span> Law Tips
            </div>
            <p className="text-sm leading-relaxed">
              Plain-language legal guidance for New Jersey injury victims. Know
              your rights, understand your options.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-text-light font-semibold text-sm uppercase tracking-widest mb-4">
              Navigation
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <div className="text-text-light font-semibold text-sm uppercase tracking-widest mb-4">
              Injured in New Jersey?
            </div>
            <p className="text-sm mb-4">
              Have questions about your accident? Get a free consultation with a
              qualified NJ personal injury attorney.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-4">
            <p>© {year} NJ Law Tips. All rights reserved.</p>
            <Link
              href="/privacy-policy"
              className="text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-center md:text-right max-w-md">
            This site is for informational purposes only and does not constitute
            legal advice. Consult a licensed attorney for advice specific to your
            situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
