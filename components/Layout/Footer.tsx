"use client";

import { Copyright } from "lucide-react";
import Center from "../Global/Ui/Center";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/libs/motion";

const Footer = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="bg-black"
      initial={reduce ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: reduce ? 0 : 0.45, ease: easeOutExpo }}
    >
      <Center>
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center py-4 text-white">
          <div className="flex font-bold">
            Copy rights <Copyright className="mx-2" /> reserved to{" "}
            <span className="font-bold text-teal-600 mx-2">
              {" "}
              Salim Sayed Salim Mohamed
            </span>
          </div>
          <div className=" flex gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/salim-elsayed981/"
              rel="noreferrer"
            >
              <Button isIconOnly radius="full">
                <Image
                  src="/social/linked.png"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </Button>
            </Link>
            <Link
              href="https://github.com/SaLim-Sayed"
              target="_blank"
              rel="noreferrer"
            >
              <Button isIconOnly radius="full">
                <Image
                  src="/tech/github.svg"
                  width={30}
                  height={30}
                  alt="GitHub"
                />
              </Button>
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=201062913674"
              rel="noreferrer"
              target="_blank"
            >
              <Button isIconOnly radius="full">
                <Image
                  src="/social/whats.png"
                  width={30}
                  height={30}
                  alt="WhatsApp"
                />
              </Button>
            </Link>
          </div>
        </div>
      </Center>
    </motion.div>
  );
};

export default Footer;
