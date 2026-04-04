"use client";
import { AnimatedSection } from "@/components/Global/AnimatedSection";
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
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="WorkExperince">
        <WorkExp />
      </AnimatedSection>
      <AnimatedSection id="Education">
        <Education />
      </AnimatedSection>
      <AnimatedSection id="techStack">
        <TeckStack />
      </AnimatedSection>
      <AnimatedSection id="Projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <ContactUs />
      </AnimatedSection>

      <ScrollToTopFab />
    </div>
  );
};

export default Home;
