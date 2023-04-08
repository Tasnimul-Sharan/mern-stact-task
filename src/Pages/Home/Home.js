import React from "react";
import Products from "./Products/Products";
import Footer from "../Shared/Footer";
import Contact from "./Contact";
import About from "./About";
import Booking from "./Booking";
import Banner from "./Banner";
import BusinessSection from "./BusinessSection";
// import Reviews from "./Reviews";
import Slider from "./Slider";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSection />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
