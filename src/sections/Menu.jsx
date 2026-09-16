import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuCard from "../components/MenuCard";
import menuData from "../data/menuData";

const categories = [
  "ALL",
  "STARTERS",
  "MAINS",
  "DESSERTS",
  "DRINKS",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredDishes = useMemo(() => {
    if (selectedCategory === "ALL") {
      return menuData;
    }

    return menuData.filter(
      (item) => item.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="menu"
      className="border-t border-elan-border bg-elan-background"
      aria-labelledby="menu-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-medium tracking-[0.28em] text-elan-gold"
          >
            THE MENU
          </motion.p>

          <motion.h2
            id="menu-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="mt-5 font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
          >
            Flavours worth remembering.
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
            className="mt-5 max-w-2xl text-base leading-7 text-elan-muted sm:text-lg sm:leading-8"
          >
            Explore a selection of dishes created around seasonal ingredients
            and bold flavours.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 sm:mt-12 sm:flex-wrap sm:overflow-visible sm:pb-0"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 border px-5 py-2.5 text-xs font-medium tracking-[0.16em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-elan-gold focus-visible:ring-offset-2 focus-visible:ring-offset-elan-background ${
                  isSelected
                    ? "border-elan-gold bg-elan-gold text-elan-background"
                    : "border-elan-border text-elan-muted hover:border-elan-gold hover:text-elan-gold"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredDishes.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredDishes.length === 0 && (
          <div className="border border-elan-border py-16 text-center">
            <p className="font-display text-2xl text-elan-cream">
              No dishes found.
            </p>

            <p className="mt-2 text-sm text-elan-muted">
              Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;