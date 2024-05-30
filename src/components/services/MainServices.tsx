import { ServiceCard } from "@/components/services";

export default function MainServices() {
  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[100vh-96px]">
      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>
      <div className="flex flex-col gap-8">
        <ServiceCard />
      </div>
      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
