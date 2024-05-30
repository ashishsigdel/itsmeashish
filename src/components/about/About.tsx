import React from "react";
import { Footer } from "@/components/footer";
import { AboutHero, Profile } from "@/components/about";
import { LikeTech } from "@/components/tech";
import { HomeContact } from "@/components/contact";
import { MainServices } from "@/components/services";

export default function About() {
  return (
    <>
      <div className="px-3 sm:px-4 md:px-5">
        <AboutHero />
        <Profile />
        <MainServices />
        <LikeTech />
        <HomeContact />
      </div>
      <Footer />
    </>
  );
}
