"use client";

import React from "react";
import { Hero } from "@/components/home/hero";
import { HomeProfile } from "@/components/about";
import { Highlight } from "@/components/projects";
import { LikeTech } from "@/components/tech";
import { HomeContact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {" "}
      <div className="px-3 sm:px-4 md:px-5">
        <Hero />
        <HomeProfile />
        <Highlight />
        <LikeTech />
        <HomeContact />
      </div>
      <Footer />
    </>
  );
}
