import { HighlightsSlider } from "@/components/home/HighlightsSlider";
import { LatestWork } from "@/components/home/LatestWork";
import { WelcomeSection } from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <>
      {/* background stains - start */}
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl dark:opacity-60"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-full flex-none bg-gradient-to-r from-[#e2a8a8] to-[#8d6fe7] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      {/* background stains - end */}
      <div className="flex flex-col gap-12">
        <HighlightsSlider />
        <WelcomeSection />
        <LatestWork />
      </div>

      {/* background stains - start */}
      <div
        className="absolute left-0 right-0 top-full -z-10 -mt-[500px] w-full -translate-y-1/4 transform-gpu justify-center overflow-hidden blur-3xl dark:opacity-50 sm:flex"
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
    </>
  );
}
