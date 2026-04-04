"use client";

import { Copyright } from "lucide-react";
import Center from "../Global/Ui/Center";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-background border-t border-divider">
      <Center>
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center py-8 text-foreground">
          <div className="flex font-bold items-center">
            Copy rights <Copyright size={18} className="mx-2" /> reserved to{" "}
            <span className="font-bold text-primary mx-2">
              {" "}
              Salim Sayed
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
    </div>
  );
};

export default Footer;
