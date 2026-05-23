"use client";

import Title from "@/components/Global/Title";
import Center from "@/components/Global/Ui/Center";
import { Card } from "@nextui-org/react";
import Typewriter from "react-ts-typewriter";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const title = (
    <div className="flex justify-center items-center">
     
      <Typewriter text="Contact Me" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div>
      <Center>
        <div className=" mb-[33px] mt-4">
          <Title
            exSt="mt-[40px]"
            exStTitle="font-700 text-[30px]"
            exStSubTitle="leading-[24px] text-[16px]"
            title={title}
            subTitle={"Get in touch"}
          />
        </div>
        <div className="flex justify-center mb-8">
          <Card className="flex w-full lg:w-[50%]  shadow-none   items-center flex-col  gap-[40px]">
            <ContactForm />
          </Card>
        </div>
      </Center>
    </div>
  );
};

export default ContactUs;
