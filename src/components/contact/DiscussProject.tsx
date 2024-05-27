import Image from "next/image";
import React from "react";
import myImage from "@/assets/me/me.jpg";
import { Button } from "@/components/common";
import Link from "next/link";

export default function DiscussProject() {
  return (
    <div className="flex flex-col max-w-6xl my-3 px-3 mx-auto">
      <div className="rounded-ss-md bg-black/25 rounded-ee-md blur-bg border border-primary-border-color w-full mb-5 mt-5 z-[99]">
        <div className="border-b h-fit w-full border-primary-border-color">
          <p className="p-3">collaboration</p>
        </div>
        <div className="flex flex-col sm:flex-row p-10 gap-10 items-center">
          <div className="mx-10">
            <Image
              src={myImage}
              alt="ashish"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-3xl sm:text-4xl md:text-5xl">
              Let&#39;s work together on your next project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
