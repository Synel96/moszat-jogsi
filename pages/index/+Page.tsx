import { About } from "@/components/About";
import { ExamInfo } from "@/components/ExamInfo";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { ServiceArea } from "@/components/ServiceArea";
import { Vehicles } from "@/components/Vehicles";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <ServiceArea />
      <Vehicles />
      <Pricing />
      <ExamInfo />
    </>
  );
}
