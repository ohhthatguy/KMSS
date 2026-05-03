import HeroCarosel from "@/components/Home/client-comp/HeroCarosel";
import Feature1 from "@/components/Home/Feature1";
import Feature2 from "@/components/Home/Feature2";
import FeatureStrip from "@/components/Home/FeatureStrip";
import FindUs from "@/components/Home/FindUs";
import LatestNews from "@/components/Home/LatestNews";

export default function Home() {
  return (
    <main className="">
      <HeroCarosel />
      <Feature1 />
      <FeatureStrip />
      <Feature2 />
      <LatestNews />
      <FindUs />
    </main>
  );
}
