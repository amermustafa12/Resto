import Hero from "@/components/Hero";
import FeaturedDishes from "@/components/FeaturedDishes";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <About />
      <Menu />
      <Reservation />
      <Contact />
    </>
  );
}