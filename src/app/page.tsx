import { HighlightsSlider } from "@/components/home/HighlightsSlider";
import { LatestWork } from "@/components/home/LatestWork";
import { WelcomeSection } from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />
      <HighlightsSlider />
      <LatestWork />
    </>
  );
}
