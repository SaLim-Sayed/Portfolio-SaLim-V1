import {
  Copyright,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Center from "../Global/Ui/Center";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

interface IProps {}

const Footer = ({}: IProps) => {
  return (
    <div className=" bg-black ">
      <Center>
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center py-4 text-white">
          <div className="flex font-bold">
            Copy rights <Copyright className="mx-2" /> reserved to{" "}
            <span className="font-bold text-teal-600 mx-2"> SaLim</span>
          </div>
          <div className=" flex gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/salim-elsayed981"
              rel="noreferrer"
            >
              <Button isIconOnly radius="full">
                <Image
                  src="/social/linked.png"
                  width={30}
                  height={30}
                  alt="css"
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
                  alt="css"
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
                  alt="css"
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
