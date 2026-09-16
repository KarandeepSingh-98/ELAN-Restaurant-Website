import { motion } from "framer-motion";
import DishCard from "../components/DishCard";

const featuredDishes = [
  {
    name: "Truffle Paneer",
    description:
      "Charred paneer, truffle cream, herbs and toasted hazelnut.",
    price: "₹645",
    category: "STARTER",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Saffron Risotto",
    description:
      "Arborio rice, saffron, parmesan and seasonal vegetables.",
    price: "₹795",
    category: "MAIN",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Butter Chicken Royale",
    description:
      "Smoked tomato, cultured butter, fenugreek and tender chicken.",
    price: "₹725",
    category: "MAIN",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Dark Chocolate Tart",
    description:
      "70% dark chocolate, sea salt, vanilla and almond.",
    price: "₹495",
    category: "DESSERT",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
];

function FeaturedDishes() {
  return (
    <section
      id="featured-dishes"
      className="border-t border-elan-border bg-elan-background"
      aria-labelledby="featured-dishes-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section Header */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs font-medium tracking-[0.28em] text-elan-gold"
          >
            THE ÉLAN EDIT
          </motion.p>

          <motion.h2
            id="featured-dishes-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="mt-5 font-display text-4xl leading-tight tracking-[-0.02em] text-elan-cream sm:text-5xl lg:text-6xl"
          >
            Signature dishes, thoughtfully crafted.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base leading-7 text-elan-muted"
          >
            A selection of dishes that represent our approach to modern dining.
          </motion.p>
        </div>

        {/* Dish Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;