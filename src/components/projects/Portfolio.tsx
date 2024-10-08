"use client";

import React, { useState } from "react";
import {
  AIProjects,
  AllProjects,
  PhotoshopGallery,
  RecentProject,
} from "@/components/projects";
import { SectionTitle } from "../common";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col justify-center max-w-6xl mt-3 mb-7 px-3 mx-auto"
    >
      <SectionTitle title={"Projects Highlights"} />
      <AllProjects />
    </div>
  );
}
