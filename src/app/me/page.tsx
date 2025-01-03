import { About } from "@/components/me/about";
import { Contact } from "@/components/me/contact";
import { Hero } from "@/components/me/home";
import { HomeProjects } from "@/components/me/projects";
import { Services } from "@/components/me/services";
import { TechBehind, TechILike } from "@/components/me/tech";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="w-full bg-light dark:bg-[#0f141b]">
        <div id="home" className="w-full mx-auto lg:h-[calc(100vh-6rem)]">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <HomeProjects />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="tech">
          <TechILike />
          <TechBehind />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
