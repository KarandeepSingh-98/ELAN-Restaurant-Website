import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function MenuCard({ item }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -5 }}
      transition={{
        layout: {
          duration: 0.35,
          ease: "easeInOut",
        },
        y: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className="group overflow-hidden border border-elan-border bg-elan-secondary"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-black/5"
          aria-hidden="true"
        />
      </div>

      <div className="flex min-h-[235px] flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[10px] font-medium tracking-[0.24em] text-elan-gold">
            {item.category}
          </p>

          <p className="shrink-0 text-sm text-elan-cream">
            {item.price}
          </p>
        </div>

        <h3 className="mt-4 font-display text-2xl leading-tight text-elan-cream">
          {item.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-elan-muted">
          {item.description}
        </p>

        <div className="mt-auto flex justify-end pt-6">
          <span
            className="flex h-9 w-9 items-center justify-center border border-elan-border text-elan-muted transition-all duration-200 group-hover:border-elan-gold group-hover:text-elan-gold"
            aria-hidden="true"
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default MenuCard;