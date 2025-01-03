"use client";

import { AllProjects } from "@/components/me/projects";

export default function HomeProjects() {
  return (
    <div className="max-w-7xl mx-auto h-full my-16 px-3">
      <div className="w-full text-center my-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Projects Highlights
        </h1>
      </div>
      <AllProjects />
    </div>
  );
}
