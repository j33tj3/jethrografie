import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SplashSlider } from "@/components/home/SplashSlider";
import { MainNavigation } from "@/components/navigation/MainNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jethrografie",
  description: "Photography portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SplashSlider />
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
