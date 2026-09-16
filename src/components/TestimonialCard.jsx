import { Star } from "lucide-react";
import { motion } from "framer-motion";

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group flex min-h-[300px] flex-col border border-elan-border bg-elan-secondary p-6 sm:p-7"
    >
      {/* Rating */}
      <div
        className="flex items-center gap-1"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
          <Star
            key={starIndex}
            size={14}
            strokeWidth={1.25}
            fill="currentColor"
            className="text-elan-gold"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-8 font-display text-2xl leading-[1.35] text-elan-cream">
        “{testimonial.quote}”
      </blockquote>

      {/* Guest Information */}
      <div className="mt-auto border-t border-elan-border pt-5">
        <p className="text-sm font-medium text-elan-cream">
          {testimonial.name}
        </p>

        <p className="mt-1 text-[10px] tracking-[0.2em] text-elan-muted uppercase">
          {testimonial.role}
        </p>
      </div>
    </motion.article>
  );
}

export default TestimonialCard;