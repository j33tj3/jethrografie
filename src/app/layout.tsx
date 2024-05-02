import type { Metadata } from "next";
import { Mohave } from "next/font/google";
import "./globals.css";
import { MainNavigation } from "@/components/ui/mainNavigation/MainNavigation";
import { Footer } from "@/components/ui/Footer";
import { twMerge } from "tailwind-merge";

const mohaveFonts = Mohave({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mohave",
});

export const metadata: Metadata = {
  title: {
    template: "%s Jethrografie",
    default: "Jethrografie",
  },
  description: "Portfolio van Jethrografie",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light-theme.png",
        href: "/images/favicon-light-theme.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark-theme.png",
        href: "/images/favicon-dark-theme.png",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
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
        <main className="grow pb-12 pt-4 md:pb-20 md:pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
