"use client";
import Logo from "@/public/logo.jpg";
import Link from "next/link";
import { links } from "./links";
import { useToggleStore } from "@/hooks/features/useControllerStore";
import { Button, Image } from "@nextui-org/react";
import { cn } from "@/libs/cn";

const Menu = () => {
  const { toggle, setToggle } = useToggleStore();

  return (
    <>
      <div className="p-2 flex justify-center">
        <div className="flex flex-col items-center gap-8 px-2">
          <Button
            isIconOnly
            radius="full"
            variant="light"
            size={toggle ? "sm" : "md"}
            className={cn("  shadow-md ", toggle ? "w-16 h-16" : "w-32 h-32")}
          >
            <Image src="logo.jpg" alt="" className="m-0 p-0" />
          </Button>
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              return (
                <Button
                  isIconOnly
                  size={toggle ? "sm" : "md"}
                  variant="light"
                  key={link.id}
                  className={cn(
                    "flex items-center justify-start text-white gap-2",
                    toggle ? "w-8 " : "w-40 "
                  )}
                >
                  <Link href={link.url} title={toggle ? link.title : ""}>
                    {link.icon}
                  </Link>
                  {!toggle && (
                    <Link className="hover:text-amber-600" href={link.url}>
                      {link.title}
                    </Link>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
