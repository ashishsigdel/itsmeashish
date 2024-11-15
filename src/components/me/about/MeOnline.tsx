"use client";

import Link from "next/link";
import React from "react";
import { socialLinks } from "@/types/constant"; // Adjust the path if necessary
import { MdArrowOutward } from "react-icons/md";

export default function MeOnline() {
  return (
    <div className="w-full max-w-[15rem] bg-white/40 dark:bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color h-fit ">
      <div className="p-2 border-b border-primary-border-color">
        <span>me-online</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        {Object.entries(socialLinks).map(([key, value], index) => (
          <div key={key}>
            <Link
              href={value}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="text-gray-500 mr-1">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className={`text-hard-dark dark:text-light cursor-pointer`}>
                {key}
              </span>
              <MdArrowOutward />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
