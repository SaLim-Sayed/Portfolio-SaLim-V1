"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import Center from "../Global/Ui/Center";
import Image from "next/image";
import Title from "../Global/Title";
import { Fade } from "react-swift-reveal";
import { BsWhatsapp } from "react-icons/bs";
import { File } from "lucide-react";
import ClientHydration from "../Global/ClientHydration";

/* eslint-disable react/no-unescaped-entities */
interface IProps {}

const Hero = ({}: IProps) => {
  const renderContent = () => (
    <div className="   flex flex-col gap-4  items-center   p-12    text-white">
      <div className="    text-4xl    ">
        <Title
          exStTitle="text-white"
          title={"Hello 👋 I'm"}
          subTitle="Salim Sayed Salim "
          desc="Software Engineer ( Frontend )"
        />
      </div>
      <div className="flex w-[300px] gap-2">
        <Fade duration={1000} delay={500} distance="200px" left>
          <Button color="success" variant="ghost" size="lg">
            <Link
              className="flex items-center gap-2"
              href="https://api.whatsapp.com/send?phone=201062913674"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Whatsapp
              <BsWhatsapp />
            </Link>
          </Button>
        </Fade>
        <Fade duration={1000} delay={500} distance="200px" right>
          <Button size="lg" color="secondary">
            <Link
              className="flex items-center gap-2"
              target="_blank"
              href="/CV.pdf"
              download="SalimSayed sr_frontend CV.pdf"
            >
              My Resume
              <File />
            </Link>
          </Button>
        </Fade>
      </div>
    </div>
  );
  return (
    <div className=" bg-[#11303d] ">
      <Center>
        <ClientHydration LoaderComponent={renderContent()}>
          <div className="w-full md:w-[80%] mx-auto grid grid-cols-1 items-center justify-center justify-items-center   md:justify-items-around gap-4  md:grid-cols-2 ">
            {" "}
            <div className="  shadow-none m-4">
              <div
                className="badge-base LI-profile-badge rounded-md shadow-2xl"
                data-locale="ar_AE"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="salim-elsayed981"
                data-version="v1"
              >
                <Link
                  className="badge-base__link LI-simple-link text-blue-500"
                  href="https://eg.linkedin.com/in/salim-elsayed981?trk=profile-badge"
                ></Link>
              </div>
            </div>
            {renderContent()}
          </div>
        </ClientHydration>
      </Center>
    </div>
  );
};

export default Hero;
