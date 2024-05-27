import React from "react";
import { ContactHero, DiscussProject } from "@/components/contact";
import { ContactForm } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <>
      <div className="px-3 sm:px-4 md:px-5">
        <ContactHero />
        <DiscussProject />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
