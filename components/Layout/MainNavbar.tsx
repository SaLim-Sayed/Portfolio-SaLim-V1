"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { links } from "./links";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";
import { BsWhatsapp } from "react-icons/bs";

export default function MainNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcive, setIsAcive] = React.useState(1);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Button size="lg" variant="light" className="w-10 h-10 flex gap-2">
            <p className="font-bold text-3xl text-[#00b5bc]">SaLim</p>
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Button
            size="lg"
            variant="light"
            className="w-40 h-10 flex justify-between gap-2"
          >
            <div className="font-bold text-3xl text-[#00b5bc]">SaLim</div>
          </Button>
        </NavbarBrand>

        {links.map((item, index) => (
          <NavbarItem key={item.id}>
            <Button variant="light">
              <Link
                href={item.url}
                className={cn(
                  isAcive === item.id && "text-orange-500 font-bold"
                )}
                onClick={() => setIsAcive(item.id)}
              >
                {item.title}
              </Link>
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="bordered" size="lg">
            <Link
              className="flex items-center text-[#00b5bc] gap-2"
              href="https://api.whatsapp.com/send?phone=201062913674"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Call Me
              <BsWhatsapp />
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((item) => (
          <>
            <NavbarMenuItem key={item.id}>
              <Button
                onClick={() => setIsAcive(item.id)}
                size="lg"
                className="w-full flex justify-start left-0"
                as={Link}
                href={item.url}
                color={item.id === isAcive ? "warning" : "default"}
              >
                <Link
                  passHref
                  className="  flex gap-2 font-bold"
                  href={item.url}
                >
                  {item.icon} {item.title}
                </Link>
              </Button>
            </NavbarMenuItem>
          </>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
