import HydrationZustand from "@/components/Global/HydrationZustand";
import MainLoader from "@/components/Global/MainLoader";
import NextUi from "@/components/Global/NextUi";
import Footer from "@/components/Layout/Footer";
import MainNavbar from "@/components/Layout/MainNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-vertical-timeline-component/style.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salim Sayed",
  description: "Experienced Frontend Developer , Next Js Developer",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        />
      </head>
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
