import Image from "next/image";

export const WelcomeSection = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="flex w-full max-w-5xl flex-col items-center py-10 md:flex-row">
        <div className="flex flex-col gap-y-6 border-4 border-black p-8 md:-mr-12 md:pr-16 ">
          <h1 className="text-2xl font-bold">
            Jij of jouw <span className="italic">merk</span>? Dat is wat ik{" "}
            <span className="uppercase italic">versterk</span>!
          </h1>
          <p className="text-xl font-light">
            Wel met plaatjes natuurlijk. Want als{" "}
            <span className="font-normal">fotograaf</span> kan ik je helpen met
            een sfeershoot van jou, product of onderneming. Een
            <span className="font-normal"> bedrijfsreportage</span> met oog voor
            het <span className="italic">ambacht</span>. Altijd handig om te
            hebben voor je socials en prints. Kijk maar even rond en anders
            connecten we via de <>Link</>
            form.
          </p>
        </div>
        <div className="hidden h-min shrink-0 border-4 border-black bg-white p-4 md:flex">
          <Image
            src={"/images/home/welcome/1.jpg"}
            width="480"
            height="320"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};
