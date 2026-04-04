"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function NextUi({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="portfolio-theme"
      disableTransitionOnChange
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
