import React from "react";
import { ContactHero } from "@/components/contact";
import { ContactForm } from "@/components/contact";

export default function Contact() {
  return (
    <div className="px-3 sm:px-4 md:px-5">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
