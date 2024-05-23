import Link from "next/link";
import React from "react";

export default function ILove() {
  return (
    <div className="w-full bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color h-fit">
      <div className="p-2 border-b border-primary-border-color">
        <span className="">me-online</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        <p className=" ">
          <span className="text-gray-700 mr-1">1.</span>
          <span className="text-primary-blue">linkedin</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">2.</span>

          <span className="text-primary-yellow">instagram</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">3.</span>
          <span className="text-primary-red">facebook</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">4.</span>
          <span className="text-primary-blue">X</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">5.</span>
          <span className="text-primary-yellow">github</span>
        </p>
      </div>
    </div>
  );
}