import { MotionConfig } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import FeaturedDishes from "./sections/FeaturedDishes";
import About from "./sections/About";
import Menu from "./sections/Menu";
import WhyChooseElan from "./sections/WhyChooseElan";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import Reservation from "./sections/Reservation";
import Footer from "./components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <Menu />
        <WhyChooseElan />
        <Gallery />
        <Testimonials />
        <Reservation />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;