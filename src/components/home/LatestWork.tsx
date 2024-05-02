"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageFrame } from "../ui/ImageFrame";

export const LatestWork = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="-mb-1 border-4 border-black bg-white p-2 text-2xl font-bold dark:border-white dark:bg-black md:p-4">
        laatste project
      </h2>
      <ImageFrame className="w-full max-w-3xl">
        <Image
          src="/images/home/latestwork/1.jpg"
          alt="Verloskundigen Praktijk Bijlmermeer"
          width="680"
          height="420"
          className="h-auto w-full"
        />
      </ImageFrame>
      <Link
        className="-mt-1 flex border-4 border-black bg-white p-2 text-xl font-bold uppercase hover:underline dark:border-white dark:bg-black md:p-4 md:text-2xl"
        href="/projects/vpbijlmermeer"
      >
        Verloskundigenpraktijk Bijlmermeer
      </Link>
    </div>
  );
};
