import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import React from "react";
import { Fade } from "react-swift-reveal";

const About = () => {
  return (
    <>
      <div className="bg-slate-100 py-4  " id="about">
        <Center>
          <Title title="About Me" />

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
                  Highly skilled Senior Frontend Developer with 3+ years of
                  experience in building responsive, user-centric web
                  applications using React, Next.js, and React Native.
                  Proficient in crafting interactive UIs, managing state with
                  Redux and Zustand, and integrating APIs for seamless user
                  experiences. Adept at optimizing performance, collaborating
                  with cross-functional teams, and employing the latest
                  technologies to deliver scalable solutions in the banking,
                  e-commerce, and real estate sectors.
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
