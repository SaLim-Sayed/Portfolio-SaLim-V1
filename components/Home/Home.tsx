"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import About from "./About/About";
import ContactUs from "./Contact/ContactUs";
import Hero from "./Hero";
import Projects from "./Project/Projects";
import TeckStack from "./TechStack/TeckStack";
import WorkExp from "./Work/WorkExp";
import Ads from "../Global/Ads";

const Home = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden relative">
      <Ads />
      <Hero />
      <About />
      <WorkExp />
      <TeckStack />
      <Projects />
      <ContactUs />
      
      <Button
        size="lg"
        isIconOnly
        className="fixed rounded-full bg-cyan-600 text-white z-50 bottom-10 right-10 animate-bounce"
        color="primary"
        variant="bordered"
      >
        <Link href={"#main"}>
          <FaArrowUp size={20} />
        </Link>
      </Button>
    </div>
  );
};

export default Home;
