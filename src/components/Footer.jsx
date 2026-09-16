import { Mail, MapPin, Phone } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "YouTube",
    href: "#",
  },
];

function Footer() {
  return (
    <footer
      className="border-t border-elan-border bg-elan-background"
      aria-label="Footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="inline-block font-display text-4xl tracking-[0.18em] text-elan-cream transition-colors duration-200 hover:text-elan-gold focus:outline-none focus-visible:text-elan-gold"
              aria-label="ÉLAN home"
            >
              ÉLAN
            </a>

            <p className="mt-5 max-w-xs font-display text-xl leading-relaxed text-elan-muted">
              Where Every Plate Tells a Story.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-medium tracking-[0.22em] text-elan-gold uppercase">
              Navigation
            </h2>

            <nav className="mt-5" aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-elan-muted transition-colors duration-200 hover:text-elan-cream focus:outline-none focus-visible:text-elan-gold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Visit Us / Opening Hours */}
          <div>
            <div>
              <h2 className="text-xs font-medium tracking-[0.22em] text-elan-gold uppercase">
                Visit Us
              </h2>

              <div className="mt-5 flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-elan-gold"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-elan-muted">
                  New Delhi, India
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xs font-medium tracking-[0.22em] text-elan-gold uppercase">
                Opening Hours
              </h2>

              <p className="mt-5 text-sm leading-6 text-elan-muted">
                Monday – Sunday
                <br />
                12:00 PM – 11:00 PM
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-medium tracking-[0.22em] text-elan-gold uppercase">
              Contact
            </h2>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+911145678900"
                className="flex items-start gap-3 text-sm text-elan-muted transition-colors duration-200 hover:text-elan-cream focus:outline-none focus-visible:text-elan-gold"
              >
                <Phone
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-elan-gold"
                  aria-hidden="true"
                />

                <span>+91 11 4567 8900</span>
              </a>

              <a
                href="mailto:hello@elanrestaurant.com"
                className="flex items-start gap-3 break-all text-sm text-elan-muted transition-colors duration-200 hover:text-elan-cream focus:outline-none focus-visible:text-elan-gold"
              >
                <Mail
                  size={16}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-elan-gold"
                  aria-hidden="true"
                />

                <span>hello@elanrestaurant.com</span>
              </a>
            </div>

            {/* Social */}
            <div className="mt-8">
              <h2 className="text-xs font-medium tracking-[0.22em] text-elan-gold uppercase">
                Social
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="border border-elan-border px-4 py-2 text-xs tracking-wide text-elan-muted transition-colors duration-200 hover:border-elan-gold hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-4 border-t border-elan-border pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-elan-muted">
            © 2026 ÉLAN. All rights reserved.
          </p>

          <p className="text-[10px] tracking-[0.18em] text-elan-muted uppercase">
            Contemporary Dining • New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;