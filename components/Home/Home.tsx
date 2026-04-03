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
      <AnimatedSection id="WorkExperince" delay={0.04}>
        <WorkExp />
      </AnimatedSection>
      <AnimatedSection id="Education" delay={0.06}>
        <Education />
      </AnimatedSection>
      <AnimatedSection id="techStack" delay={0.08}>
        <TeckStack />
      </AnimatedSection>
      <AnimatedSection id="Projects" delay={0.1}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="contact" delay={0.12}>
        <ContactUs />
      </AnimatedSection>

      <ScrollToTopFab />
    </div>
  );
};

export default Home;
