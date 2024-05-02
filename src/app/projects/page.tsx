import { AllProjectsGallery } from "@/components/projects/AllProjectsGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten van",
};

export default function ProjectsPage() {
  return (
    <div className="flex justify-center overflow-hidden px-4">
      <div className="w-full max-w-5xl pb-32 pt-12">
        <AllProjectsGallery />

        {/* background stains - start */}
        <div
          className="first-letter: absolute bottom-1/2 left-0 right-0 top-1/2 -z-10 h-full w-full -translate-y-1/2 transform-gpu items-center justify-center overflow-hidden blur-3xl dark:opacity-70 sm:flex "
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        {/* background stains - end */}
      </div>
    </div>
  );
}
