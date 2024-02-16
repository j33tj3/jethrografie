import type { Metadata } from "next";
import { Mohave } from "next/font/google";
import "./globals.css";
import { SplashSlider } from "@/components/home/SplashSlider";
import { MainNavigation } from "@/components/ui/MainNavigation";
import { Footer } from "@/components/ui/Footer";

const mohaveFonts = Mohave({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
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
        <Footer />
      </body>
    </html>
  );
}
