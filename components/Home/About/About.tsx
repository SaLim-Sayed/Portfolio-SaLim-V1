import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-slate-100 py-4  " id="about">
        <Center>
          <Title title="About Me" />

          <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 items-center justify-center justify-items-center   md:justify-items-around gap-4  md:grid-cols-2 ">
    <Button size="lg" className=" shadow-lg shadow-black w-[80%] p-0  h-[90%]">
            <Image
            isBlurred
              src="logo.jpg"
              alt=""
              width={300}
              height={300}
              className=" cursor-pointer  m-0  "
            />
            </Button>

            <div className="flex items-center p-5 ">
              <p className=" text-lg leading-8 text-justify">
                Experienced Front-end Developer with a focus on React and
                Next.js, bringing [2 years ] of hands-on experience in
                developing and implementing innovative web solutions. Proven
                ability to collaborate with cross-functional teams to deliver
                high quality software. Adept at translating design concepts into
                responsive and interactive user interfaces
              </p>
            </div>
          </div>
        </Center>
      </div>
    </>
  );
};

export default About;
