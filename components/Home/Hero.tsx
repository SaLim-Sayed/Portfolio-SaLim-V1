"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Typewriter from "react-ts-typewriter";
import Center from "../Global/Ui/Center";

/* eslint-disable react/no-unescaped-entities */
interface IProps {}

const Hero = ({}: IProps) => {
  return (
    <div className=" bg-black ">
      <Center>
        <div className=" flex flex-col gap-4 justify-between  items-center md:items-start p-5   h-[300px]   text-white">
          <div className="    text-5xl  pt-12    ">
            <h1 className="">
              Hello 👋 I'm{" "}
              <span className="text-orange-500 ">
                <Typewriter text="a Frontend Developer" loop delay={200} />
              </span>
            </h1>
          </div>
          <div className="flex gap-4">
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
