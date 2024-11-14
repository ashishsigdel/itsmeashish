"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import welcomeImage from "@/assets/projects/thanks/Illustration_Celebration-Welcome.png";

export default function Confirm() {
  // File or URL
  const [getType, setgetType] = useState("url");

  return (
    <div className="flex gap-10 h-full items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center text-center">
        {/* <h1 className="text-[80px]">🙌</h1> */}
        <h1 className="text-[42px] md:text-[57px] leading-[50px] md:leading-[60px] font-[900]">
          Thanks for coming!
        </h1>
        <p className="text-[18px] font-normal mt-5 leading-7 text-gray-700 dark:text-gray-400">
          Here you can{" "}
          {getType === "url" ? "get the full source code" : "download the file"}
          .
        </p>
        {/* File or URL selection */}
        {getType === "url" ? (
          <Link href={"https://github.com"} target="__blank">
            <button className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all flex items-center gap-3">
              Go to the link
              <FaArrowRight />
            </button>
          </Link>
        ) : (
          <button className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all flex items-center gap-3">
            Download
            <FaDownload />
          </button>
        )}
      </div>
      {/* Image Section */}
      <div className="flex-1 hidden md:block">
        <Image
          src={welcomeImage}
          alt="Thanks"
          className="drop-shadow-2xl shadow-black dark:shadow-white"
        />
      </div>
    </div>
  );
}
