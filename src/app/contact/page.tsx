import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";

export default function ContactMePage() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex w-full max-w-5xl flex-1 gap-x-9 pb-32 pt-12">
        <div className="mt-7 hidden -rotate-1 md:block">
          <div className=" border-8 border-black p-4 ">
            <Image
              src={"/images/home/highlights/1.jpg"}
              alt={"bla"}
              width="320"
              height="480"
              className="h-auto w-full"
            />
          </div>
        </div>
        <ContactForm className="w-full md:basis-8/12" />
      </div>
    </div>
  );
}
