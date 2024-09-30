"use client";
import Image from "next/image";

 
import { Card } from "@nextui-org/react";
import Center from "@/components/Global/Ui/Center";
import Title from "@/components/Global/Title";
import ContactForm from "./ContactForm";

 

const ContactUs = ( ) => {
  return (
    <>
      <Center>
        
        <div className=" mb-[33px] mt-4">
          <Title
            exSt="mt-[40px]"
            exStTitle="font-700 text-[30px]"
            exStSubTitle="leading-[24px] text-[16px]"
            title={"Contact Us"}
            subTitle={"Get in touch"}
          />
        </div>
        <div className="flex justify-center mb-8">
          <Card className="flex w-full lg:w-[50%]  shadow-none   items-center flex-col  gap-[40px]">
            <ContactForm />
          </Card>
        </div>
      </Center>
    </>
  );
};

export default ContactUs;
