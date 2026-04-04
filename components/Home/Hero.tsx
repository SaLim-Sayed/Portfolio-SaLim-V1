"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Center from "../Global/Ui/Center";
import Image from "next/image";
import Title from "../Global/Title";
import { BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { File } from "lucide-react";
import ClientHydration from "../Global/ClientHydration";

/* eslint-disable react/no-unescaped-entities */
interface IProps { }

const Hero = ({ }: IProps) => {
  const reduce = useReducedMotion();

  const renderContent = () => (
    <div className="flex flex-col gap-6 items-center p-4 md:p-12 text-center">
      <motion.div
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.8 }}
        className="text-4xl"
      >
        <Title
          exStTitle="text-center items-center justify-center font-bold"
          title={"Hello 👋 I'm"}
          subTitle="Salim Sayed"
          desc="Senior Frontend / React Native Engineer"
        />
      </motion.div>

      <motion.div
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.2 }}
        className="flex flex-wrap justify-center md:justify-start w-full gap-4"
      >
        <Button
          color="success"
          variant="shadow"
          size="lg"
          className="font-semibold px-8"
        >
          <Link
            className="flex items-center gap-2"
            href="https://api.whatsapp.com/send?phone=201062913674"
            rel="noreferrer"
            target="_blank"
          >
            Whatsapp
            <BsWhatsapp size={20} />
          </Link>
        </Button>

        <Button
          color="primary"
          variant="flat"
          size="lg"
          className="font-semibold px-8 backdrop-blur-md border border-primary/20"
        >
          <Link
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/salim-elsayed981/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <BsLinkedin size={20} />
          </Link>
        </Button>

        <Button
          size="lg"
          color="secondary"
          variant="flat"
          className="font-semibold px-8 backdrop-blur-md border border-secondary/20"
        >
          <Link
            className="flex items-center gap-2"
            target="_blank"
            href="/CV.pdf"
            download="SalimSayed sr_frontend CV.pdf"
          >
            My Resume
            <File size={20} />
          </Link>
        </Button>
      </motion.div>

    </div>
  );

  return (
    <div id="main" className="relative min-h-[60vh] flex items-center bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <Center>
        <ClientHydration LoaderComponent={<div className="h-[400px]" />}>
          <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center py-12">
            {/* Content Column */}
            <div className="w-full flex flex-col items-center">
              {renderContent()}
            </div>
          </div>
        </ClientHydration>
      </Center>
    </div>
  );
};

export default Hero;
