"use client";

import Link from "next/link";
import React from "react";
import { socialLinks } from "@/types/constant"; // Adjust the path if necessary
import { MdArrowOutward } from "react-icons/md";

export default function AboutMe() {
  return (
    <div className="w-full max-w-2xl lg:max-w-3xl mx-auto bg-white/70 dark:bg-black/60 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-black/15 dark:border-white/15 h-fit  cursor-grab">
      <div className="p-2 border-b border-black/15 dark:border-white/15">
        <span>about-me</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2 m-0">
        <p className="m-0">
          <span className="text-gray-500 mr-1">01.</span>
          Hello, Nice to meet you! I&#39;m Ashish, a{" "}
          <span className="text-primary-blue">Computer Engineering</span>{" "}
          student.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">02.</span>
          I&#39;m passionate about{" "}
          <span className="text-primary-blue">Full Stack Development </span>
          as well as{" "}
          <span className="text-primary-blue">Machine Learning </span>
          and{" "}
          <span className="text-primary-blue">Artificial Intelligence.</span>
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">03.</span>
          With expertise in the{" "}
          <span className="text-primary-blue">MERN, MEAN</span> and{" "}
          <span className="text-primary-blue">Next.js</span> stacks, I thrive on
          creating seamless <span className="text-primary-blue">UX</span> with a{" "}
          <span className="text-primary-blue">robust backend</span>.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">04.</span>
          Beyond coding, I <span className="text-primary-blue">love</span>{" "}
          staying <span className="text-primary-blue">up-to-date</span> with{" "}
          <span className="text-primary-blue">tech trends</span> and enjoying
          the <span className="text-primary-blue">outdoors</span>.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">05.</span>
          After 3+ years of using{" "}
          <span className="text-primary-blue">Photoshop,</span> I have knowledge
          of the art of{" "}
          <span className="text-primary-blue">Photomanipulation</span> and{" "}
          <span className="text-primary-blue">graphic design</span>.
        </p>
      </div>
    </div>
  );
}
