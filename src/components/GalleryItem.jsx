import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function GalleryItem({ item, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className={`group relative min-h-[280px] overflow-hidden border border-elan-border ${item.className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading={index < 2 ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/45"
        aria-hidden="true"
      />

      {/* Hover Content */}
      <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-6">
        <div>
          <p className="text-[10px] font-medium tracking-[0.22em] text-elan-gold">
            {item.category}
          </p>

          <h3 className="mt-2 font-display text-xl text-elan-cream sm:text-2xl">
            {item.title}
          </h3>
        </div>

        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center border border-elan-cream/40 text-elan-cream"
          aria-hidden="true"
        >
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </span>
      </div>
    </motion.article>
  );
}

export default GalleryItem;