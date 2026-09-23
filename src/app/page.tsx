import { generateMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { TickerSection } from "@/components/sections/ticker";
import { IndustriesSection } from "@/components/sections/industries";
import { ProcessSection } from "@/components/sections/process";
import { ShowcaseSection } from "@/components/sections/showcase";
import { WorkSection } from "@/components/sections/work";
import { ToolsSection } from "@/components/sections/tools";
import { WhySection } from "@/components/sections/why";

export const metadata = generateMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <TickerSection />
      <IndustriesSection />
      <ProcessSection />
      <ShowcaseSection />
      <WorkSection />
      <WhySection />
      <ToolsSection />
    </>
  );
}
