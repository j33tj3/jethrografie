"use client";

import Image from "next/image";
import Link from "next/link";

export const LatestWork = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12">
      <h2 className="-mb-1 border-4 border-black bg-white p-4 text-2xl font-bold">
        laatste project
      </h2>
      <div className="w-full max-w-3xl border-8 border-black bg-white p-2 md:p-4">
        <Image
          src="/images/home/latestwork/1.jpg"
          alt="Verloskundigen Praktijk Bijlmermeer"
          width="680"
          height="420"
          className="h-auto w-full"
        />
      </div>
      <div className="-mt-1 border-4 border-black bg-white p-4 text-2xl font-bold">
        <Link href="/projects/vpbijlmermeer">
          Verloskundigenpraktijk Bijlmermeer
        </Link>
      </div>
    </div>
  );
};
