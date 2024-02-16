import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav>
          <div>
            <Link href={"/"}>Home</Link>
          </div>
          <div>
            <Link href={"/about"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
