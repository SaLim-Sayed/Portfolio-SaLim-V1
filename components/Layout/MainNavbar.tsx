"use client";
import { cn } from "@/libs/cn";
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { links } from "./links";

export default function MainNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isAcive, setIsAcive] = React.useState(1);

  return (
    <Navbar id="main" onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Button
            isIconOnly
            size="lg"
            variant="light"
            className="w-20 h-20 flex gap-2"
          >
            <Image src="S_logo.jpeg" alt="LOGO" width={50} height={50} />
          </Button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Button
            isIconOnly
            size="lg"
            variant="light"
            className="w-20 h-20 flex gap-2"
          >
            <Image src="S_logo.jpeg" alt="LOGO" width={50} height={50} />
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
