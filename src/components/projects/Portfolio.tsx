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
      <div className="flex gap-3 mx-auto items-center">
        <span
          onClick={() => handleTabToggle("recent")}
          className={`hover:bg-black/20 ${
            tab === "recent" ? "bg-black/70" : ""
          } text-white/75 rounded-md py-1 px-3 cursor-pointer`}
        >
          Recent
        </span>
        <span
          onClick={() => handleTabToggle("web")}
          className={`hover:bg-black/20 ${
            tab === "web" ? "bg-black/70" : ""
          } text-white/75 rounded-md py-1 px-3 cursor-pointer`}
        >
          Web
        </span>
        <span
          onClick={() => handleTabToggle("ai")}
          className={`hover:bg-black/20 ${
            tab === "ai" ? "bg-black/70" : ""
          } text-white/75 rounded-md py-1 px-3 cursor-pointer`}
        >
          AI and ML
        </span>
        <span
          onClick={() => handleTabToggle("photoshop")}
          className={`hover:bg-black/20 ${
            tab === "photoshop" ? "bg-black/70" : ""
          } text-white/75 rounded-md py-1 px-3 cursor-pointer`}
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
