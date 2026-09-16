import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function DishCard({ dish }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group border border-elan-border bg-elan-secondary"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-black/5"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex min-h-[250px] flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[10px] font-medium tracking-[0.25em] text-elan-gold">
            {dish.category}
          </p>

          <span className="text-sm text-elan-muted">{dish.price}</span>
        </div>

        <h3 className="mt-5 font-display text-2xl leading-tight text-elan-cream">
          {dish.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-elan-muted">
          {dish.description}
        </p>

        <div className="mt-auto flex justify-end pt-7">
          <span
            className="flex h-9 w-9 items-center justify-center border border-elan-border text-elan-muted transition-all duration-200 group-hover:border-elan-gold group-hover:text-elan-gold"
            aria-hidden="true"
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default DishCard;