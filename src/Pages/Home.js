import React from "react";
import TopNav from "../Components/TopNav";
import MainNav from "../Components/MainNav";
import OurCours from "../Components/OurCours";
import Director from "../Components/Director";
import Accordion from "../Components/Accordion ";
import Main from "../Components/Main";
import Motivation from "../Components/Motivation";
// import HomeSlider from "../Components/HomeSlider";
import Footer from "../Components/Footer";
import LatestNews from "../Components/LatestNews";
import NewSlider from "../Components/NewSlider";
const Home = () => {
  return (
    <div>
      <TopNav />
      <MainNav />
      {/* <HomeSlider /> */}
      <NewSlider/>
      <OurCours />
      <Director />
      <Accordion />
      <Main />
      <Motivation />
      <LatestNews />
      <Footer />
 
    </div>
  );
};

export default Home;
