"use client";

import React from "react";

export default function ILove() {
  return (
    <div className="w-full max-w-[18rem] bg-white/70 dark:bg-black/60 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-black/15 dark:border-white/15 cursor-grab">
      <div className="p-2 border-b border-black/15 dark:border-white/15">
        <span>i-loves</span>
      </div>
      <div className="p-2 md:p-5 flex flex-col gap-2">
        {[
          "Coding",
          "Listening to Music",
          "Exploring",
          "Money",
          "Photography",
          "Videography",
          "Watching Movies",
        ].map((item, index) => (
          <p key={index}>
            <span className="text-gray-500 mr-1">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span className={`text-hard-dark dark:text-light`}>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
