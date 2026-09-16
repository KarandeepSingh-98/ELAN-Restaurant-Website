import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 border-b border-elan-border bg-elan-background"
    >
      <nav
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          className="shrink-0 font-display text-2xl tracking-[0.18em] text-elan-cream transition-colors duration-200 hover:text-elan-gold focus:outline-none focus-visible:text-elan-gold"
          aria-label="ÉLAN home"
        >
          ÉLAN
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm tracking-wide text-elan-muted transition-colors duration-200 hover:text-elan-cream focus:outline-none focus-visible:text-elan-cream"
            >
              {link.label}

              <span
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-elan-gold transition-transform duration-200 hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}

          <a
            href="#reservation"
            className="border border-elan-gold bg-elan-gold px-5 py-2.5 text-sm font-medium tracking-wide text-elan-background transition-all duration-200 hover:bg-transparent hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-background"
          >
            Reserve a Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-elan-cream transition-colors duration-200 hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold lg:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="overflow-hidden border-t border-elan-border bg-elan-background lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-5 sm:px-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="border-b border-elan-border py-4 text-sm tracking-wide text-elan-muted transition-colors duration-200 hover:text-elan-cream focus:outline-none focus-visible:text-elan-cream"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#reservation"
              onClick={closeMobileMenu}
              className="mt-5 border border-elan-gold bg-elan-gold px-5 py-3 text-center text-sm font-medium tracking-wide text-elan-background transition-all duration-200 hover:bg-transparent hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold"
            >
              Reserve a Table
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;