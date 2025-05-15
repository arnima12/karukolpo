import React from "react";
import Banner from '../Banner/Banner'
import Categories from "../Categories/Categories";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import BehindTheScenes from "../BehindTheScenes/BehindTheScenes";
import CustomerFeedback from "../Feedback/Feedback";
const Home = () => {
  return (
    <>
      <Banner />
      <Categories/>
      <FeaturedProduct/>
      <BehindTheScenes/>
      <CustomerFeedback/>
    </>
  );
};

export default Home;
