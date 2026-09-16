import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";
import testimonialsData from "../data/testimonialsData";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-elan-border bg-elan-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-medium tracking-[0.28em] text-elan-gold"
          >
            FROM OUR GUESTS
          </motion.p>

          <motion.h2
            id="testimonials-heading"
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
            Moments worth talking about.
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;