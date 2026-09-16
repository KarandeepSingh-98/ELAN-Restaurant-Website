import { motion } from "framer-motion";

const aboutImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85";

const statistics = [
  {
    value: "12+",
    label: "Years of Experience",
  },
  {
    value: "35+",
    label: "Signature Dishes",
  },
  {
    value: "4.9",
    label: "Guest Rating",
  },
];

function About() {
  return (
    <section
      id="about"
      className="border-t border-elan-border bg-elan-secondary"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-elan-border sm:aspect-[5/6] lg:aspect-[4/5]">
              <img
                src={aboutImage}
                alt="Interior of the ÉLAN restaurant"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div
              className="absolute -bottom-5 -right-5 hidden h-24 w-24 border border-elan-gold sm:block"
              aria-hidden="true"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.28em] text-elan-gold"
            >
              OUR STORY
            </motion.p>

            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="mt-5 max-w-2xl font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
            >
              A table is more than a place to eat.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: "easeOut",
              }}
              className="mt-7 max-w-xl space-y-5 text-base leading-7 text-elan-muted sm:text-lg sm:leading-8"
            >
              <p>
                ÉLAN was created around a simple idea: exceptional food should
                feel memorable. We bring together the depth of Indian flavours,
                the precision of European technique, and an atmosphere designed
                for meaningful moments.
              </p>

              <p>
                From carefully sourced ingredients to thoughtful presentation,
                every detail is considered to make your time with us feel
                special.
              </p>
            </motion.div>

            <motion.a
              href="#our-story"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.24,
                ease: "easeOut",
              }}
              className="mt-8 inline-flex min-h-12 items-center justify-center border border-elan-gold px-7 text-sm font-medium tracking-wide text-elan-gold transition-colors duration-200 hover:bg-elan-gold hover:text-elan-background focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-secondary"
            >
              Discover Our Story
            </motion.a>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="mt-12 grid grid-cols-1 border-t border-elan-border pt-7 min-[420px]:grid-cols-3"
            >
              {statistics.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`pb-4 ${
                  index !== statistics.length - 1
                    ? "border-b border-elan-border"
                    : ""
                } ${
                  index > 0 ? "pt-4" : ""
                } min-[420px]:pb-0 min-[420px]:pt-0 min-[420px]:pr-4 ${
                  index !== statistics.length - 1
                    ? "min-[420px]:border-b-0 min-[420px]:border-r min-[420px]:border-elan-border"
                    : ""
                } ${index > 0 ? "min-[420px]:pl-4" : ""}`}
                >
                  <p className="font-display text-2xl text-elan-cream sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 max-w-[120px] text-[10px] leading-4 tracking-[0.12em] text-elan-muted uppercase sm:text-xs sm:leading-5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;