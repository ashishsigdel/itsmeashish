import { Project } from "@/components/asprog/project";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-5 min-h-[calc(100vh-6rem)]">
        <Project />
      </div>
    </div>
  );
}
