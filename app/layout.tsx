import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HydrationZustand from "@/components/Global/HydrationZustand";
import NextUi from "@/components/Global/NextUi";
import MainLoader from "@/components/Global/MainLoader";
import MainNavbar from "@/components/Layout/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salim Portfolio",
  description: "Experienced Frontend Developer , Next Js Developer",
  icons: {
    icon: "/favicon.ico",
  },
};
import "react-vertical-timeline-component/style.min.css";
import Footer from "@/components/Layout/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUi>
          <HydrationZustand LoaderComponent={<MainLoader />}>
            <MainNavbar />
            {children}
            <Footer />
          </HydrationZustand>
        </NextUi>
      </body>
    </html>
  );
}
