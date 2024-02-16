"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-screen justify-center bg-black py-10 text-white">
      <div className="w-full max-w-5xl">
        <Link href="">Algemene voorwaarden</Link>
      </div>
    </footer>
  );
};
