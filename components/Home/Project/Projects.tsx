"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import Typewriter from "react-ts-typewriter";
import { Button, Image } from "@nextui-org/react";
import { projectsList } from "./data";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { Github, Videotape } from "lucide-react";
import { Fade } from "react-swift-reveal";
const Projects = () => {
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
      <Typewriter text="Top Recent Projects" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-slate-200 py-6" id="Projects">
      <Center>
        <Title title={title} />
        <div className="w-[90%] md:w-[80%] my-5 mx-auto grid grid-cols-1 items-center justify-center justify-items-center   md:justify-items-around gap-6  md:grid-cols-2">
          {projectsList.map((item) => (
            <Fade
              duration={1000}
              delay={500}
              distance="200px"
              key={item.id}
              bottom
            >
              <Card
                onClick={() => window.open(item.demo, "_blank")}
                isFooterBlurred
                isPressable
                className="  group overflow-hidden  flex flex-col bg-transparent   group-hover:bg-black/20 justify-between h-[700px] w-[300px] md:w-[400px] min-w-full"
              >
                <div  className="absolute top-0 left-0 w-full h-full z-[-1] overflow-auto">
                  <iframe
                    src={item.demo}
                    className="w-full h-full opacity-50 pointer-events-none"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin"
                  ></iframe>
                </div>
                <CardHeader className="absolute z-10 top-0 flex-col  bg-black/60">
                  <p className="  uppercase text-3xl font-bold text-white">
                    {item.name}
                  </p>
                </CardHeader>
                <CardBody className=" flex justify-center items-center gap-4 h-full">
                  <div className=" justify-center ">
                    {/* <Image
                      isZoomed
                      alt="Relaxing app background"
                      className="z-0 w-full h-[200px] object-cover cursor-pointer"
                      src={item.icon}
                    />   */}
                  </div>
                  <div className="hidden group-hover:grid grid-cols-2 gap-4">
                    {item.tools.map((tool) => (
                      <Fade
                        duration={1000}
                        delay={500}
                        distance="200px"
                        key={tool.id}
                        bottom
                      >
                        <Button className="  w-28 text-tiny font-light">
                          {tool.icon} {tool.name}
                        </Button>
                      </Fade>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className=" bottom-0  w-[99%] mx-auto  bg-black/40  gap-2  z-10 border-t-1 border-default-600 dark:border-default-100 flex justify-around">
                  <Link target="_blank" href={item.github}>
                    <Button color="danger" size="lg">
                      <Github size={15} /> Github
                    </Button>
                  </Link>
                  <Link target="_blank" href={item.demo}>
                    <Button color="warning" size="lg">
                      <Videotape size={15} />{" "}
                      <div className="text-xs md:text-sm">Live demo</div>
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
