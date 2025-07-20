import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import React from "react";
import { Fade } from "react-swift-reveal";
import Typewriter from "react-ts-typewriter";

const About = () => {
  const title = (
    <div className="flex justify-center items-center">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-20 h-20 flex gap-2"
      >
        <Image src="S_logo.jpeg" alt="LOGO" width={50} height={50} />
      </Button>
      <Typewriter text="About Me" delay={1000} cursor={false} />
    </div>
  );
  return (
    <>
      <div className="bg-slate-100 py-4  " id="about">
        <Center>
          <Title title={title} />

          <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 items-center justify-center justify-items-center   md:justify-items-around gap-4  md:grid-cols-2 ">
            <Fade duration={1000} delay={500} distance="200px" bottom>
              <Button size="lg" className="   w-full p-0  h-full bg-slate-100 ">
                <Image
                  isBlurred
                  src="logo.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className=" cursor-pointer  m-0  "
                />
              </Button>
            </Fade>
            <Fade duration={1000} delay={500} distance="200px" bottom>
              <div className="flex items-center p-5 ">
                <p className="    leading-8 text-justify">
                  Frontend Developer with 4 years of experience building modern, responsive web and mobile applications.
                  Specialized in React, Next.js, and React Native with strong expertise in TypeScript, state management (Redux
                  Toolkit, Zustand), and API integration. Proven track record delivering scalable solutions in banking, e-commerce,
                  travel, and real estate platforms. Passionate about UI/UX excellence, performance optimization, and writing
                  clean, maintainable code.
                </p>
              </div>
            </Fade>
          </div>
        </Center>
      </div>
    </>
  );
};

export default About;
