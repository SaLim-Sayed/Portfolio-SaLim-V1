"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Center from "../Global/Ui/Center";
import Image from "next/image";
import Title from "../Global/Title";
import { Fade } from "react-swift-reveal";
import { BsWhatsapp } from "react-icons/bs";
import { File } from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
interface IProps {}

const Hero = ({}: IProps) => {
  return (
    <div className=" bg-[#11303d] ">
      <Center>
        <div className="   flex flex-col gap-4 justify-between  items-center   p-12   h-[400px] md:h-[300px]  md:max-h-[300px]  text-white">
          <div className="    text-4xl    ">
            <Title
              exStTitle="text-white"
              title={"Hello 👋 I'm"}
              subTitle="Salim Sayed Salim "
              desc="a Frontend Next Developer"
            />
            <h1 className=""></h1>
          </div>
          <div className="flex gap-6">
            <Fade duration={1000} delay={500} distance="200px" left>
              <Button color="success" size="lg">
                <Link
                  className="flex items-center gap-2"
                  href="https://api.whatsapp.com/send?phone=201062913674"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  Hire Me
                  <BsWhatsapp />
                </Link>
              </Button>
            </Fade>
            <Fade duration={1000} delay={500} distance="200px" right>
              <Button size="lg" color="secondary">
                <Link
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://drive.google.com/file/d/1MdZva7sgiqqRwVRhNbumUyBvP0KktvGC/view?usp=drive_link"
                >
                  My Resume
                  <File />
                </Link>
              </Button>
            </Fade>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Hero;
