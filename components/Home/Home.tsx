"use client";
import Hero from "./Hero";
import About from "./About/About";
import TeckStack from "./TechStack/TeckStack";
import WorkExp from "./Work/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import Projects from "./Project/Projects";
import Ads from "../Global/Ads";

const Home = () => {
  return (
    <div>
      <Ads />
      <Hero />
      <About />
      <WorkExp />
      <TeckStack />
      <Projects />
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{
          backgroundColor: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Home;
