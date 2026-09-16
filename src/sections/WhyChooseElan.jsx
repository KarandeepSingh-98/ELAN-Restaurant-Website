import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import experienceData from "../data/experienceData";

function WhyChooseElan() {
  return (
    <section
      id="experience"
      className="border-t border-elan-border bg-elan-secondary"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xs font-medium tracking-[0.28em] text-elan-gold"
            >
              THE ÉLAN EXPERIENCE
            </motion.p>
          </div>

          <div>
            <motion.h2
              id="experience-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
            >
              More than dinner.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: "easeOut",
              }}
              className="mt-5 max-w-xl text-base leading-7 text-elan-muted sm:text-lg sm:leading-8"
            >
              Every element of the experience is designed with intention.
            </motion.p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">
          {experienceData.map((feature, index) => (
            <ExperienceCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseElan;