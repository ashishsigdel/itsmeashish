"use client";

import React from "react";
import { toast } from "react-toastify";

export default function Home() {
  const handleClick = () => {
    toast.success("Under Production! See you soon.");
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center z-[9999]">
      <span className="text-sm text-white/60">Home</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        Hi, I&#39;m Ashish
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        a <span className="text-primary">AI Enthusiast</span> and Creative{" "}
        <span className="text-primary">Developer</span>
      </h3>
      <p className="text-sm mt-10 text-gray-color">
        Dedicated to creating robust web applications <br />
        and exploring artificial intelligence and machine learning...
      </p>
    </div>
  );
}
