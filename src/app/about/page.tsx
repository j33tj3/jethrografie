import { ImageFrame } from "@/components/ui/ImageFrame";
import { rotateImage } from "@/utils/rotateImage";
import { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Jethrografie - Over mij",
};

export default function AboutMePage() {
  return (
    <div className="overflow-hidden px-4">
      <div className="mx-auto max-w-5xl pb-32 pt-12">
        {/* background stains - start */}
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#e2a8a8] to-[#8d6fe7] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        {/* background stains - end */}

        <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="flex w-full max-w-xl flex-col gap-y-6 border-4 border-black p-4 font-light sm:p-12 lg:shrink-0 xl:max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              JETHROGRAFIE?
            </h1>
            <p className="text-xl font-normal">
              YES, MIJN NAAM IS <span className="font-bold">JETHRO</span> EN IK
              HOU VAN <span className="font-bold italic">FOTOGRAFIE</span>!
            </p>
            <p className="relative text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Best creatief bedacht toch? En zo doe ik dat ook als ik de
              plaatjes aan het schieten ben achter mijn camera. Sinds vroeger al
              aan het knutselen met een analoge film camera en tegenwoordige de
              wat meer serieuzere projectjes aan het doen met mijn systeem
              camera.
            </p>
            <p className="relative text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Ik ben een familie man en woon met mijn gezin in Haarlem. Ik
              gedraag me af en toe speelser dan mijn kinderen en daar schaam ik
              me absoluut niet voor. Want juist dat gebruik ik om het beeld te
              creëren die ik voor mijn ogen hebt.
            </p>
            <p className="relative text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Zoek jij een fotograaf die speels en creatief is en kan de shoot
              na kantoor uren of in het weekend? Neem dan gerust contact met mij
              op en misschien kunnen wij samen iets tofs neer zetten!
            </p>
          </div>
          <div className="mt-8 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-[192px] lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <AboutImage number={1} />
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <AboutImage number={2} />
              <AboutImage number={3} />
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <AboutImage number={4} />
              <AboutImage number={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type AboutImageProps = {
  number: number;
};

const AboutImage: FC<AboutImageProps> = ({ number }) => {
  return (
    <ImageFrame notResponsive className={twMerge("", rotateImage())}>
      <Image
        src={`/images/home/highlights/${number}.jpg`}
        alt=""
        //aspect-[2/3] w-full object-cover
        width="176"
        height="264"
      />
    </ImageFrame>
  );
};
