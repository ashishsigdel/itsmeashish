"use client";
import { Button, SectionTitle } from "@/components/common";

export default function ContactForm() {
  return (
    <div className="flex flex-col justify-center max-w-6xl my-3 px-3 mx-auto">
      <SectionTitle title={"Send Me a Message"} />
      <div className="w-full max-w-4xl mx-auto rounded-ss-lg bg-black/25 rounded-ee-lg blur-bg border border-primary-border-color">
        <div className="p-2 border-b border-primary-border-color">
          <span>write-me</span>
        </div>
        <form className="flex flex-col gap-5 p-3 sm:p-4 md:p-8">
          <div className="flex justify-start">
            <span className="text-primary-blue mr-2 text-sm">01</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-name*</span>
              <input
                type="text"
                placeholder="Your full name"
                className="bg-transparent w-full p-3 border border-primary-border-color rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <span className="text-primary-blue mr-2 text-sm">02</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">company</span>
              <input
                type="text"
                placeholder="Enter your Company Name"
                className="bg-transparent w-full p-3 border border-primary-border-color rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <span className="text-primary-blue mr-2 text-sm">03</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-email*</span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full p-3 border border-primary-border-color rounded-lg focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-start">
            <span className="text-primary-blue mr-2 text-sm">04</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-message*</span>
              <textarea
                placeholder="Enter your email address"
                rows={4}
                className="bg-transparent w-full p-3 border border-primary-border-color rounded-lg focus:outline-none resize-none"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full items-center">
            <input
              onChange={(e) => {
                e.target.style.backgroundColor = e.target.checked
                  ? "#ff0000"
                  : "#f0f0f0";
              }}
              type="checkbox"
              className="w-4 h-4"
            />
            <span className="text-sm">
              I accepts{" "}
              <span className="hover:underline text-primary-red cursor-pointer">
                terms and conditions*
              </span>
              .
            </span>
          </div>
          <div className="mx-auto">
            <Button title={"Send Messages"} />
          </div>
        </form>
      </div>
    </div>
  );
}
