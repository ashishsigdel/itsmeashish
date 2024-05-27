import React, { useState } from "react";
import { ContactForm, HomeContact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MadeWith, Portfolio, PortfolioHero } from "@/components/projects";

export default function Projects() {
  return (
    <>
      <div className="px-3 sm:px-4 md:px-5">
        <PortfolioHero />
        <Portfolio />
        <MadeWith />
        <HomeContact />
      </div>
      <Footer />
    </>
  );
}
