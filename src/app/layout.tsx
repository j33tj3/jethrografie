import type { Metadata } from "next";
import { Mohave } from "next/font/google";
import "./globals.css";
import { MainNavigation } from "@/components/ui/MainNavigation";
import { Footer } from "@/components/ui/Footer";
import { twMerge } from "tailwind-merge";

const mohaveFonts = Mohave({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mohave",
});

export const metadata: Metadata = {
  title: "Jethrografie",
  description: "Portfolio van Jethrografie",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={twMerge(
          mohaveFonts.className,
          "flex h-screen flex-col overflow-auto dark:bg-black",
        )}
      >
        <MainNavigation />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
