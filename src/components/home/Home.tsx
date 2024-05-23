"use client";

import React from "react";
import { toast } from "react-toastify";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Highlight } from "@/components/home/projects";

export default function Home() {
  return (
    <div className="px-3 sm:px-4 md:px-5">
      <Hero />
      <About />
      <Highlight />
    </div>
  );
}
