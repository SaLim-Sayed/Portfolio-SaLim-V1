"use client";

 

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function NextUi({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  );
}
