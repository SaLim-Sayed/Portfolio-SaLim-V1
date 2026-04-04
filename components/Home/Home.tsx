"use client";
import { ScrollToTopFab } from "@/components/Global/ScrollToTopFab";
import About from "./About/About";
import ContactUs from "./Contact/ContactUs";
import Hero from "./Hero";
import Projects from "./Project/Projects";
import TeckStack from "./TechStack/TeckStack";
import WorkExp from "./Work/WorkExp";
import Education from "./Education/Education";
import Ads from "../Global/Ads";

const Home = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden relative">
      <Ads />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="WorkExperince">
        <WorkExp />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="techStack">
        <TeckStack />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactUs />
      </div>

      <ScrollToTopFab />
    </div>
  );
};

export default Home;
