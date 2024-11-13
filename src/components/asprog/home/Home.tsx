import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { MemberForm } from "@/components/asprog/home";

export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col w-full h-full p-8">
      {/* Left Section */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto h-full justify-center items-start pl-8">
        <h1 className="text-[57px] leading-[60px] font-[900]">
          Welcome to <span className="text-purple-500">asProg·</span> <br />{" "}
          Master <span className="text-blue-500">Programming</span> With a{" "}
          <span className="text-purple-500">Community-Driven</span> Approach
        </h1>

        <h3 className="text-[18px] font-normal mt-5 leading-7 text-gray-700 dark:text-gray-400">
          Gain practical experience and elevate your skills to build the
          applications you've always envisioned.
        </h3>

        <button className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all flex items-center gap-3">
          Get Started
          <FaArrowRight />
        </button>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-1 flex justify-end items-center w-full h-full">
        <div className="w-full max-w-md">
          <MemberForm />
        </div>
      </div>

      {/* Floating Button */}
      <div className="absolute bottom-12 right-12 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <SiBuymeacoffee className="text-black text-3xl" />
      </div>
    </div>
  );
}
