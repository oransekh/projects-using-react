import React from "react";
import HeroSlider from "../../components/common/HeroSlider";
import HomeProducts from "../common/HomeProducts";
import FeaturedProducts from "../common/FeaturedProducts";
import Banner from "../common/Banner";
import Subscribe from "../common/Subscribe";
const Home = () => {
  return (
    <main>
      <HeroSlider />
      <HomeProducts />
      <FeaturedProducts />
      <Banner />
      <Subscribe />
    </main>
  );
};

export default Home;
