"use client";
import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Typewriter from "react-ts-typewriter";
import { easeOutExpo } from "@/libs/motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const reduce = useReducedMotion();

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
      <Typewriter text="EDUCATION" delay={1000} cursor={false} />
    </div>
  );

  const educationData = [
    {
      degree: "B.Sc. Computer Science & Engineering",
      institution: "Faculty of Electronic Engineering / Menoufia University",
      period: "Sep 2017 – Jul 2022",
      details: "Degree: Very Good [82%] | Graduation Project: CareMe - healthcare app (Grade: Excellent)",
      stack: [],
      icon: <GraduationCap className="text-blue-500" size={24} />,
    },
    {
      degree: "MERN Stack Developer Track",
      institution: "Information Technology Institute (ITI)",
      period: "Jul 2022 – Oct 2022",
      details: "Intensive 3-month track focused on full-stack web development using MongoDB, Express.js, React, and Node.js.",
      stack: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Award className="text-orange-500" size={24} />,
    }
  ];

  return (
    <div className="bg-slate-100 py-12">
      <Center>
        <Title title={title} />
        <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{
                duration: reduce ? 0 : 0.48,
                delay: reduce ? 0 : index * 0.1,
                ease: easeOutExpo,
              }}
            >
              <Card className="border-none bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold mt-1">{edu.institution}</p>

                      <div className="flex items-center gap-2 mt-3 text-slate-500 text-sm">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>

                      <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {edu.details}
                      </p>
                      <div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4"> {edu.stack.map((stack, index) => (
                        <span key={index} className="inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-md text-[13px] font-medium text-slate-700 dark:text-zinc-300 bg-white/95 dark:bg-zinc-900/95 border border-slate-200/95 dark:border-zinc-700/90 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] dark:shadow-none">
                          {stack}
                        </span>
                      ))} </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </Center>
    </div>
  );
};

export default Education;
