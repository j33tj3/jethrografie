"use client";

import Image from "next/image";
import { ImageFrame } from "../ui/ImageFrame";
import Link from "next/link";

export const WelcomeSection = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex w-full max-w-5xl flex-col items-center py-10 md:flex-row">
        <div className="flex flex-col gap-y-6 border-4 border-black bg-white p-4 pb-8 dark:border-white dark:bg-black md:-mr-12 md:p-8 md:pr-16 ">
          <h1 className="text-2xl font-bold">
            Jij of jouw <span className="italic">merk</span>? Dat is wat ik{" "}
            <span className="uppercase italic">versterk</span>!
          </h1>
          <p className="text-xl font-light">
            Wel met plaatjes natuurlijk. Want als{" "}
            <span className="font-normal italic">fotograaf</span> kan ik je
            helpen met een sfeershoot van jou, product of onderneming. Een
            <span className="font-normal italic"> bedrijfsreportage</span> met
            oog voor het <span className="italic">ambacht</span>. Altijd handig
            om te hebben voor je socials en prints. Kijk maar even rond en
            anders connecten we via de{" "}
            <Link href="/contact" className="underline">
              contact formulier
            </Link>
            .
          </p>
        </div>
        <ImageFrame className="-mt-6 h-min shrink-0 -rotate-1 md:mt-0 md:rotate-1">
          <Image
            src={"/images/home/welcome/1.jpg"}
            width="480"
            height="320"
            alt={""}
          />
        </ImageFrame>
      </div>
    </div>
  );
};
