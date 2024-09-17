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

export default function LikeTech() {
  return (
    <div
      id="technologies"
      className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto min-h-[100vh-96px]"
    >
      <SectionTitle title={"Techs I like to work with"} />

      <div className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"></div>

      <div className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto">
        <div className="p-2 border-b border-primary-border-color">
          <span className="">web-develop</span>
        </div>
        <div className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10">
          <SiNextdotjs className="text-[52px]" />
          <SiReact className="text-[52px]" />
          <SiTailwindcss className="text-[52px]" />
          <SiSass className="text-[52px]" />
          <SiJavascript className="text-[52px]" />
          <SiTypescript className="text-[52px]" />
          <SiNodedotjs className="text-[52px]" />
        </div>
      </div>
      <div className="h-[2rem] bg-primary-border-color w-[1px] mx-auto"></div>
      <div className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto">
        <div className="p-2 border-b border-primary-border-color">
          <span className="">machine-learning</span>
        </div>
        <div className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10">
          <SiPython className="text-[52px]" />
          <SiTensorflow className="text-[52px]" />
          <SiPytorch className="text-[52px]" />
          <SiScikitlearn className="text-[52px]" />
          <SiPandas className="text-[52px]" />
          <SiNumpy className="text-[52px]" />
        </div>
      </div>
      <div className="h-[2rem] bg-primary-border-color w-[1px] mx-auto"></div>
      <div className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto">
        <div className="p-2 border-b border-primary-border-color">
          <span className="">design</span>
        </div>
        <div className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10">
          <SiAdobephotoshop className="text-[52px]" />
          <SiAdobeillustrator className="text-[52px]" />
          <SiFigma className="text-[52px]" />
        </div>
      </div>
      <div className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"></div>
    </div>
  );
}
