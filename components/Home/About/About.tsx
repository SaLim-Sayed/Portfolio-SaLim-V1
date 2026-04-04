"use client";

import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Typewriter from "react-ts-typewriter";

const About = () => {
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
      <Typewriter text="About Me" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div className="bg-background py-16">
      <Center>
        <Title title={title} />

        <div className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-8">
          <div className="flex justify-center md:justify-end">
            <div className="p-2 bg-content1 rounded-3xl shadow-2xl border border-divider overflow-hidden max-w-[350px] w-full">
              <div
                className="badge-base LI-profile-badge"
                data-locale="ar_AE"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="salim-elsayed981"
                data-version="v1"
              >
                <Link
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/salim-elsayed981?trk=profile-badge"
                ></Link>
              </div>
            </div>
          </div>
          <div className="flex items-center p-6 sm:p-1">
            <p className="leading-8 text-justify text-lg text-foreground/80 font-medium">
              Senior Frontend & Mobile Engineer with 5+ years of experience designing and developing scalable web and cross-platform mobile applications using React.js, React Native, Next.js, TypeScript, and modern JavaScript frameworks. Proven experience delivering high-performance digital products across fintech, banking, e-commerce, and SaaS solutions. Strong expertise in state management (Redux, RTK Query), RESTful API integration, performance optimization, and building responsive, accessible user interfaces. Adept at collaborating with cross-functional teams in agile environments to deliver secure, reliable, and production-ready applications at scale.
            </p>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default About;
