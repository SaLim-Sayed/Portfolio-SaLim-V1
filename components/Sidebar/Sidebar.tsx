"use client";
import { useToggleStore } from "@/hooks/features/useControllerStore";
import { cn } from "@/libs/cn";
import { ArrowLeftFromLine, ArrowRightToLine } from "lucide-react";
import Menu from "./Menu";

interface IProps {}

const Sidebar = ({}: IProps) => {
  const { toggle, setToggle } = useToggleStore();
  return (
    <div
      className={cn(
        "h-[100vh] fixed w-48 hidden md:flex flex-col justify-between bg-slate-800 pt-2 text-white",
        toggle && " w-16 "
      )}
    >
      <Menu />
      <div className="flex items-left  justify-end cursor-pointer">
        {toggle ? (
          <ArrowRightToLine
            className=" bg-orange-500 text-white my-2"
            onClick={setToggle}
          />
        ) : (
          <ArrowLeftFromLine
            className=" bg-orange-500 text-white my-2  "
            onClick={setToggle}
          />
        )}
      </div>
     
    </div>
  );
};

export default Sidebar;
