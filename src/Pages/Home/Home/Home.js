import React from "react";
import Banner from '../Banner/Banner'
import Categories from "../Categories/Categories";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import BehindTheScenes from "../BehindTheScenes/BehindTheScenes";
import CustomerFeedback from "../Feedback/Feedback";
import OurStory from "../OurStory/OurStory";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <>
      <Banner />
      <OurStory/>
      <Categories/>
      <FeaturedProduct/>
      <BehindTheScenes/>
      <CustomerFeedback/>
      <Contact/>
    </>
  );
};

export default Home;
