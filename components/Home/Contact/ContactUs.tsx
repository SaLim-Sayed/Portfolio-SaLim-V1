"use client";

import { Button, Card, Image } from "@nextui-org/react";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Title";
import ContactForm from "./ContactForm";
import Typewriter from "react-ts-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/libs/motion";

const ContactUs = () => {
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
      <Typewriter text="Contact Me" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div>
      <Center>
        <motion.div
          className=" mb-[33px] mt-4"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: reduce ? 0 : 0.5, ease: easeOutExpo }}
        >
          <Title
            exSt="mt-[40px]"
            exStTitle="font-700 text-[30px]"
            exStSubTitle="leading-[24px] text-[16px]"
            title={title}
            subTitle={"Get in touch"}
          />
        </motion.div>
        <motion.div
          className="flex justify-center mb-8"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: reduce ? 0 : 0.52,
            delay: reduce ? 0 : 0.06,
            ease: easeOutExpo,
          }}
        >
          <Card className="flex w-full lg:w-[50%]  shadow-none   items-center flex-col  gap-[40px]">
            <ContactForm />
          </Card>
        </motion.div>
      </Center>
    </div>
  );
};

export default ContactUs;
