import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      {/* HERO SECTION - SHOWROOM ENTRY */}
      <Hero />

      {/* VEHICLE CATEGORIES - SUV, BIKE, LUXURY */}
      <Categories />

      {/* FEATURED VEHICLES LISTING */}
      <ProductCard />

      {/* CUSTOMER REVIEWS */}
      <Testimonials />
    </>
  );
}

export default Home;