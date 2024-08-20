"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Button, Image } from "@nextui-org/react";
import { TechstackList } from "./data";
import { Fade } from "react-swift-reveal";

const TeckStack = () => {
  const title = (
    <div className="flex">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="S_logo.jpeg" alt="LOGO" width={30} height={30} />
      </Button>
      <Typewriter text="TECHNOLOGIES STACK" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-100 py-6" id="techStack">
      <Center>
        <Title title={title} />
        <div className="w-full md:w-[80%] my-5 mx-auto grid grid-cols-2 items-center justify-center justify-items-center   md:justify-items-around gap-4  md:grid-cols-4">
          {TechstackList.map((item) => (
            <Fade
              duration={1000}
              delay={500}
              distance="200px"
              key={item.id}
              bottom
            >
              <Button variant="flat" size="lg" className=" bg-teal-700/20 w-44">
                {item.icon} {item.name}
              </Button>
            </Fade>
          ))}
        </div>
      </Center>
    </div>
  );
};

export default TeckStack;
