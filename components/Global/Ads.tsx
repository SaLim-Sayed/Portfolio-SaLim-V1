"use client";
import Image from "next/legacy/image";

import adsImage from "@/public/ads.svg";
import closeIcon from "@/public/close.svg";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import Title from "./Title";
import Typewriter from "react-ts-typewriter";

export default function Ads() {
  const title = (
    <div className="flex">
      <ButtonGroup
        isIconOnly
        size="lg"
        variant="light"
        className="w-10 h-10 flex gap-2"
      >
        <Image src="/S_logo.svg" alt="LOGO" width={30} height={30} />
      </ButtonGroup>
      <Typewriter text="Salim Sayed Salim " loop delay={1000} cursor={false} />
    </div>
  );
  const [adsState, adsStatusStter] = useState(true);
  return (
    <Modal
      aria-labelledby="labeldiv"
      backdrop="opaque"
      isOpen={adsState}
      defaultOpen={true}
      placement="center"
      hideCloseButton={true}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent aria-labelledby="labeldiv" className=" bg-[#11303d]">
        <ModalHeader
          aria-labelledby="labeldiv"
          className="flex flex-col gap-1  "
        >
          <Button
            isIconOnly
            radius="full"
            onClick={() => {
              adsStatusStter(false);
            }}
            variant="light"
            className="w-max  min-w-max h-max   z-50"
          >
            <Image src={closeIcon} alt="closeIcon" />
          </Button>
        </ModalHeader>
        <ModalBody aria-labelledby="labeldiv" className="pb-[20px] ">
          <Title
            title={title}
            exStTitle="text-white"
            subTitle=""
            desc="Experienced Frontend  Developer"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
