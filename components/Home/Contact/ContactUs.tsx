"use client";

 
import { Button, Card, Image } from "@nextui-org/react";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Title";
import ContactForm from "./ContactForm";
import Typewriter from "react-ts-typewriter";

 

const ContactUs = () => {
  const title = (
    <div className="flex">
      <Button
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="S_logo.jpeg" alt="LOGO" width={30} height={30} />
      </Button>
      <Typewriter text="Contact Us" delay={1000} cursor={false} />
    </div>
  );
  return (
    <div id="contact">
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
