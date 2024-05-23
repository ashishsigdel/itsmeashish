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
          <span className="text-gray-700 mr-1">01.</span>
          <span className="text-primary-blue cursor-pointer">linkedin</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">02.</span>

          <span className="text-primary-yellow cursor-pointer">instagram</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">03.</span>
          <span className="text-primary-red cursor-pointer">facebook</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">04.</span>
          <span className="text-primary-blue cursor-pointer">X</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">05.</span>
          <span className="text-primary-yellow cursor-pointer">github</span>
        </p>
      </div>
    </div>
  );
}
