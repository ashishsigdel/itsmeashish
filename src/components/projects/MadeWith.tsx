import { SectionTitle } from "@/components/common";
import React from "react";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiSass,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export default function MadeWith() {
  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[100vh-96px]">
      <SectionTitle title={"Tech Behind This Website"} />

      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>

      <div className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto">
        <div className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10">
          <SiNextdotjs className="text-[52px]" />
          <SiTailwindcss className="text-[52px]" />
          <SiSass className="text-[52px]" />
          <SiTypescript className="text-[52px]" />
          <SiNodedotjs className="text-[52px]" />
        </div>
      </div>

      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
