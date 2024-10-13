import { SectionTitle } from "@/components/common";
import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

const TechIcon = ({
  Icon,
  name,
}: {
  Icon: React.ElementType;
  name: string;
}) => (
  <div className="relative group">
    <Icon className="text-[52px] transition-transform duration-300 group-hover:scale-110" />
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export default function MadeWith() {
  const technologies = [
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiSass, name: "Sass" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiNodedotjs, name: "Node.js" },
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[100vh-96px]">
      <SectionTitle title={"Tech Behind This Website"} />
      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>
      <div className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto">
        <div className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10">
          {technologies.map((tech, index) => (
            <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
          ))}
        </div>
      </div>
      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
