import { motion } from "framer-motion";
import GalleryItem from "../components/GalleryItem";
import galleryData from "../data/galleryData";

function Gallery() {
  return (
    <section
      id="gallery"
      className="border-t border-elan-border bg-elan-background"
      aria-labelledby="gallery-heading"
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
            A GLIMPSE OF ÉLAN
          </motion.p>

          <div>
            <motion.h2
              id="gallery-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: "easeOut",
              }}
              className="max-w-4xl font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
            >
              Where the atmosphere becomes part of the experience.
            </motion.h2>
          </div>
        </div>

        {/* Editorial Gallery */}
        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[260px] sm:gap-4 lg:mt-20 lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryData.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;