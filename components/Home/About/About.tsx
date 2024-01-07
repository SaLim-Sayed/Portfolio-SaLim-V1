import Title from "@/components/Global/Title";
import { Button, Image } from "@nextui-org/react";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center  bg-slate-100 " id="about">
        <Title title="About Me" />

        <div className="grid grid-cols-1 items-center justify-center  justify-items-center  md:grid-cols-2 p-5 md:pl-52 ">
          <Image
            isZoomed
            src="logo.jpg"
            alt=""
            width={250}
            height={250}
            className=" cursor-pointer m-0 p-0"
          />

          <div className="flex items-center  ">
            <p className=" text-lg leading-8 text-justify">
              Experienced Front-end Developer with a focus on React and Next.js,
              bringing [2 years ] of hands-on experience in developing and
              implementing innovative web solutions. Proven ability to
              collaborate with cross-functional teams to deliver high quality
              software. Adept at translating design concepts into responsive and
              interactive user interfaces
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
