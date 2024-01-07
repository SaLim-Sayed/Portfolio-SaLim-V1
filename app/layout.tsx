import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import HydrationZustand from "@/components/Global/HydrationZustand";
import NextUi from "@/components/Global/NextUi";
import MainLoader from "@/components/Global/MainLoader";
import MainNavbar from "@/components/Layout/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUi>
          <HydrationZustand LoaderComponent={<MainLoader/>}>
            <MainNavbar />
            {children}
          </HydrationZustand>
        </NextUi>
      </body>
    </html>
  );
}
