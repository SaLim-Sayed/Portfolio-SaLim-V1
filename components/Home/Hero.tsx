"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Typewriter from "react-ts-typewriter";
import Center from "../Global/Ui/Center";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
interface IProps {}

const Hero = ({}: IProps) => {
  return (
    <div className=" bg-[#11303d] ">
      <Center>
        <div className="   flex flex-col gap-4 justify-between  items-center   p-12   h-[400px] md:h-[250px]  md:max-h-[300px]  text-white">
          <div className="    text-4xl    ">
            <h1 className=" flex text-2xl md:text-3xl py-4">
              <Button
                isIconOnly
                size="lg"
                variant="light"
                className="w-10 h-10 flex gap-2"
              >
                <Image src="S_logo.svg" alt="LOGO" layout="fill" />
              </Button>
              <Typewriter
                text="Salim Sayed Salim"
                cursor={false}
                loop
                delay={200}
              />
            </h1>
            <h1 className="">
              Hello 👋 I'm{" "}
              <span className="text-orange-500 ">a Frontend Developer</span>
            </h1>
          </div>
          <div className="flex gap-6">
            <Button color="primary" size="lg">
              <Link
                href="https://api.whatsapp.com/send?phone=201062913674"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Hire Me
              </Link>
            </Button>
            <Button size="lg" color="secondary">
              {" "}
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1MdZva7sgiqqRwVRhNbumUyBvP0KktvGC/view?usp=drive_link"
              >
                My Resume
              </Link>
            </Button>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Hero;
