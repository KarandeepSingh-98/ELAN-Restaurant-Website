import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-elan-background"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 text-xs font-medium tracking-[0.28em] text-elan-gold"
          >
            CONTEMPORARY DINING <span className="mx-2 text-elan-border">•</span>{" "}
            NEW DELHI
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="min-w-0 max-w-3xl font-display text-4xl leading-[0.98] tracking-[-0.02em] text-elan-cream sm:text-5xl md:text-6xl lg:text-[5.5rem]"
          >
            WHERE EVERY PLATE
            <br />
            TELLS A STORY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="mt-7 max-w-xl text-base leading-7 text-elan-muted sm:text-lg sm:leading-8"
          >
            A contemporary dining experience where bold Indian flavours meet
            European elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center border border-elan-gold bg-elan-gold px-7 text-sm font-medium tracking-wide text-elan-background transition-colors duration-200 hover:bg-transparent hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-background"
            >
              Explore Our Menu
            </a>

            <a
              href="#reservation"
              className="inline-flex min-h-12 items-center justify-center border border-elan-border px-7 text-sm font-medium tracking-wide text-elan-cream transition-colors duration-200 hover:border-elan-gold hover:text-elan-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-background"
            >
              Reserve a Table
            </a>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-elan-border bg-elan-secondary sm:aspect-[5/6] lg:aspect-[4/5]">
            <img
              src={heroImage}
              alt="Elegant plated dining experience"
              className="h-full w-full object-cover"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-black/10"
              aria-hidden="true"
            />
          </div>

          {/* Editorial Detail */}
          <div className="absolute -bottom-5 -left-5 hidden border border-elan-border bg-elan-background px-5 py-4 sm:block">
            <p className="text-[10px] tracking-[0.25em] text-elan-muted uppercase">
              ÉLAN
            </p>
            <p className="mt-1 font-display text-sm text-elan-cream">
              New Delhi
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom detail */}
      <div
        className="mx-auto hidden max-w-7xl px-6 pb-6 sm:px-8 lg:block lg:px-10"
        aria-hidden="true"
      >
        <div className="h-px w-full bg-elan-border" />
      </div>
    </section>
  );
}

export default Hero;