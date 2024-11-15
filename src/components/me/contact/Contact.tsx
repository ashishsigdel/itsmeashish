import React from "react";
import { ContactForm, DiscussProject } from "@/components/me/contact";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto h-full mt-16 px-3 pb-16">
      <DiscussProject />
      <div className="w-full text-center my-10 text-[#222946]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Get in Touch
        </h1>
      </div>
      <ContactForm />
    </div>
  );
}
