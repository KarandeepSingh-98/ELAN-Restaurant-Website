import { motion } from "framer-motion";

function ExperienceCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="group border-t border-elan-border pt-6"
    >
      <div className="flex items-start justify-between gap-6">
        <span className="text-xs tracking-[0.18em] text-elan-gold">
          {feature.number}
        </span>

        <Icon
          size={22}
          strokeWidth={1.25}
          className="text-elan-muted transition-colors duration-200 group-hover:text-elan-gold"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-8 font-display text-2xl leading-tight text-elan-cream">
        {feature.title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-6 text-elan-muted">
        {feature.description}
      </p>
    </motion.article>
  );
}

export default ExperienceCard;