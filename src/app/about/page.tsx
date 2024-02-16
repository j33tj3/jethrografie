import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export default function AboutMePage() {
  return (
    <div className="overflow-hidden px-4">
      <div className="mx-auto max-w-5xl pb-32 pt-12">
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
    <div className="">
      <Image
        src={`/images/home/highlights/${number}.jpg`}
        alt=""
        className={twMerge(
          "aspect-[2/3] w-full border-8 border-black bg-gray-900/5 bg-white object-cover p-2 shadow-lg",
          `${Boolean(Math.round(Math.random())) ? "-" : ""}rotate-${Math.floor(
            Math.random() * 3 + 1,
          )}`,
        )}
        width="176"
        height="264"
      />
    </div>
  );
};
