"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Button } from "@nextui-org/react";
import { TechstackList } from "./data";

const TeckStack = () => {
  const title = (
    <Typewriter text="TECHNOLOGIES STACK" loop delay={1000} cursor={false} />
  );
  return (
    <div className="bg-slate-100 py-6" id="techStack">
      <Center>
        <Title title={title} />
        <div className="w-full md:w-[80%] my-5 mx-auto grid grid-cols-2 items-center justify-center justify-items-center   md:justify-items-around gap-4  md:grid-cols-4">
          {TechstackList.map((item) => (
            <Button  variant="flat"   key={item.id} size="lg" className=" bg-teal-700/20 w-44">
              {item.icon} {item.name}
            </Button>
          ))}
        </div>
      </Center>
    </div>
  );
};

export default TeckStack;
