import type { Metadata } from "next";
import { Mohave } from "next/font/google";
import "./globals.css";
import { SplashSlider } from "@/components/home/SplashSlider";
import { MainNavigation } from "@/components/navigation/MainNavigation";

const mohaveFonts = Mohave({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-mohave",
});

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
    <html lang="en" style={{ height: "100%" }}>
      <body className={mohaveFonts.className}>
        <SplashSlider />
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
