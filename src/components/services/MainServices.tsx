import { ServiceCard } from "@/components/services";
import { SectionTitle } from "@/components/common";

export default function MainServices() {
  return (
    <div
      id="services"
      className="flex flex-col justify-center my-3 px-3 mx-auto min-h-[100vh-96px] max-w-6xl"
    >
      <SectionTitle title={"My Services"} />
      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>
      <div className="flex flex-col gap-8">
        <ServiceCard />
      </div>
      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
