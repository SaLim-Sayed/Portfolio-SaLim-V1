"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Button, Image } from "@nextui-org/react";
import { TechstackList } from "./data";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { ViewIcon } from "lucide-react";
import { Fade } from "react-swift-reveal";
const Projects = () => {
  const title = (
    <div className="flex">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="S_logo.svg" alt="LOGO" width={30} height={30} />
      </Button>
      <Typewriter text="Top Recent Projects" loop delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-200 py-6" id="Projects">
      <Center>
        <Title title={title} />
        <div className="w-full md:w-[80%] my-5 mx-auto grid grid-cols-1 items-center justify-center justify-items-center   md:justify-items-around gap-6  md:grid-cols-2">
          {TechstackList.map((item) => (
           
              
              <Fade duration={1000} delay={500} distance="200px" key={item.id} bottom>
           <Card
              isFooterBlurred
              className="  h-[300px]  min-w-full"
            >
              <CardHeader className="absolute z-10 top-0 flex-col items-start bg-black/60">
                <p className="  uppercase text-3xl font-bold text-white">
                  {item.name}
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover cursor-pointer"
                src={item.icon}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-around">
                <Link target="_blank" href={item.github}>
                  <Button color="secondary" size="lg">
                    <Image
                      src="/tech/github.svg"
                      width={30}
                      height={30}
                      alt="css"
                    />{" "}
                    Github
                  </Button>
                </Link>
                <Link target="_blank" href={item.demo}>
                  <Button color="warning" size="lg">
                    <ViewIcon /> Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            </Fade>
          ))}
        </div>
      </Center>
    </div>
  );
};

export default Projects;
