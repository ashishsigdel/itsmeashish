import Link from "next/link";
import React from "react";

export default function ILove() {
  return (
    <div className="w-full bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color">
      <div className="p-2 border-b border-primary-border-color">
        <span className="">i-loves</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        <p className=" ">
          <span className="text-gray-700 mr-1">01.</span>
          <span className="text-primary-blue">Coding</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">02.</span>

          <span className="text-primary-yellow">Listening to Music </span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">03.</span>
          <span className="text-primary-red">Exploring</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">04.</span>
          <span className="text-primary-blue">Money</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">05.</span>
          <span className="text-primary-yellow">Photography</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">06.</span>
          <span className="text-primary-red">Videography</span>
        </p>
        <p className="">
          <span className="text-gray-700 mr-1">07.</span>
          <span className="text-primary-blue">Watching Movies</span>
        </p>
      </div>
    </div>
  );
}
