"use client";
import Link from "next/link";
import { useRef } from "react";

export const MainNavigation = () => {
  const navigationRef = useRef(null);
  return (
    <nav ref={navigationRef}>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};
