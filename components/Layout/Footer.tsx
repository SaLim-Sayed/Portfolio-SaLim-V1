import {
  Copyright,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Center from "../Global/Ui/Center";
import { Button } from "@nextui-org/react";

interface IProps {}

const Footer = ({}: IProps) => {
  return (
    <div className=" bg-black ">
      <Center>
        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center py-4 text-white">
          <div className="flex">
            Copy rights <Copyright /> reserved to{" "}
            <span className="font-bold text-teal-600 mx-2"> SaLim</span>
          </div>
          <div className=" flex gap-4">
            <Button isIconOnly radius="full">
              <FacebookIcon />
            </Button>
            <Button isIconOnly radius="full">
              <LinkedinIcon />
            </Button>
            <Button isIconOnly radius="full">
              <InstagramIcon />
            </Button>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Footer;
