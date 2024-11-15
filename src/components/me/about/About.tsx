import { AboutMe, ILove, MeOnline, Portrait } from "@/components/me/about";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto h-full mt-10 px-3">
      <div className="w-full text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          About Me
        </h1>
      </div>
      <div className="relative flex flex-wrap space-y-4 space-x-3 justify-center lg:justify-normal">
        <div className="lg:relative left-[9rem]">
          <AboutMe />
        </div>
        <div className="lg:relative top-[10rem] left-[5rem]">
          <Portrait />
        </div>
        <div className="bottom-[4rem] left-[10rem] lg:relative">
          <MeOnline />
        </div>
        <div className="lg:relative left-[18rem] bottom-[2rem]">
          <ILove />
        </div>
      </div>
    </div>
  );
}
