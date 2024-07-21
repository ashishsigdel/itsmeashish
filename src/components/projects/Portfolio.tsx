"use client";

import React, { useState } from "react";
import {
  AIProjects,
  PhotoshopGallery,
  RecentProject,
  WebProjects,
} from "@/components/projects";

export default function Portfolio() {
  const [tab, setTab] = useState<string>("recent");

  const handleTabToggle = (name: string) => {
    setTab(name);
  };
  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto ">
      <div className="flex mx-auto items-center bg-black/70 rounded-full">
        <span
          onClick={() => handleTabToggle("recent")}
          className={`hover:bg-primary/80 rounded-l-full ${
            tab === "recent" ? "bg-primary" : ""
          } text-white/75 py-2 px-3 cursor-pointer`}
        >
          Recent
        </span>
        <span
          onClick={() => handleTabToggle("web")}
          className={`hover:bg-primary/80 ${
            tab === "web" ? "bg-primary" : ""
          } text-white/75 py-2 px-3 cursor-pointer`}
        >
          Web
        </span>
        <span
          onClick={() => handleTabToggle("ai")}
          className={`hover:bg-primary/80 ${
            tab === "ai" ? "bg-primary" : ""
          } text-white/75 py-2 px-3 cursor-pointer`}
        >
          AI and ML
        </span>
        <span
          onClick={() => handleTabToggle("photoshop")}
          className={`hover:bg-primary/80 rounded-r-full ${
            tab === "photoshop" ? "bg-primary" : ""
          } text-white/75 py-2 px-3 cursor-pointer`}
        >
          Photoshop
        </span>
      </div>
      {tab === "recent" && <RecentProject />}
      {/* {tab === "web" && <WebProjects />} */}
      {/* {tab === "ai" && <AIProjects />} */}
      {/* {tab === "photoshop" && <PhotoshopGallery />} */}
    </div>
  );
}
