import { About } from "@/components/me/about";
import { Hero } from "@/components/me/home";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="w-full bg-light dark:bg-[#0f141b]">
        <div id="#home" className="w-full mx-auto lg:h-[calc(100vh-6rem)]">
          <Hero />
        </div>
        <div id="#about">
          <About />
        </div>
      </div>
    </>
  );
}
