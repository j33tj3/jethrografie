import { ContactForm } from "@/components/contact/ContactForm";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jethrografie - Contact",
};

export default function ContactMePage() {
  return (
    <div className="flex justify-center px-4">
      <div className="flex w-full max-w-5xl gap-x-9 py-12">
        <div className="mt-7 hidden -rotate-1 md:block md:basis-1/2">
          <ImageFrame>
            <Image
              src={"/images/home/highlights/1.jpg"}
              alt={"bla"}
              width="320"
              height="480"
              className="h-auto w-full"
            />
          </ImageFrame>
        </div>
        <ContactForm className="w-full md:basis-1/2" />
      </div>
      {/* background stains - start */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl dark:opacity-70 sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#e2a8a8] to-[#8d6fe7] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
          }}
        ></div>
      </div>
      {/* background stains - end */}
    </div>
  );
}
