"use client";

import React from "react";

export default function ILove() {
  return (
    <div className="w-full max-w-[18rem] bg-white/40 dark:bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color">
      <div className="p-2 border-b border-primary-border-color">
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
