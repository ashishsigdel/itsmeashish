"use client";

import React from "react";
import { Hero } from "@/components/home/hero";
import { HomeProfile, Profile } from "@/components/about";
import { Highlight, MadeWith, Portfolio } from "@/components/projects";
import { LikeTech } from "@/components/tech";
import { ContactForm, DiscussProject, HomeContact } from "@/components/contact";
import { MainServices } from "@/components/services";

export default function Home() {
  return (
    <>
      <div className="px-3 sm:px-4 md:px-5">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <Profile />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="services">
          <MainServices />
        </div>
        <div id="technologies">
          <LikeTech />
          <MadeWith />
        </div>
        <div id="contact">
          <DiscussProject />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
