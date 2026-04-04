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
    <div className="max-w-[100%] overflow-x-hidden relative bg-background">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>
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
