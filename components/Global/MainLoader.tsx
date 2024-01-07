"use client";
import { Button, Image, Spinner } from "@nextui-org/react"
import Typewriter from "react-ts-typewriter";
import Title from "./Title";

interface IProps {
  
}

const MainLoader = ({}: IProps) => {
  const title=(<div className="flex">
  <Button
    isIconOnly
    size="lg"
    variant="light"
    className="w-10 h-10 flex gap-2"
  >
    <Image src="S_logo.svg" alt="LOGO" width={30} height={30} />
  </Button>
  <Typewriter text="Top Recent Projects" loop delay={1000} cursor={false} />
</div>)
  return <div className="h-screen w-full flex  flex-col items-center justify-center">
     <Spinner label="Welcome 👋! Wait ......" color="warning" />
     <Title title={title} />
  </div>
}

export default MainLoader