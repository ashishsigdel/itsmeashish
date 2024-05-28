"use client";

import React from "react";
import "@/styles/sectionTitle.scss";
import { usePathname } from "next/navigation";

interface sectionTitleProps {
  title: String;
  description?: String;
}

export default function SectionTitle(props: sectionTitleProps) {
  const pathname = usePathname();

  const whichColor = () => {
    if (pathname === "/") return "text-primary";
    if (pathname === "/about") return "text-primary-blue";
    if (pathname === "/portfolio") return "text-primary-red";
    if (pathname === "/services") return "text-primary-blue";
    if (pathname === "/contact") return "text-primary-red";
  };

  return (
    <div className="my-10">
      <div className="flex justify-center items-center flex-col text-center">
        <div className="relative w-full whitespace-nowrap text-center">
          <h2 className="opacity-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold stoke-title">
            {props.title}
          </h2>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${whichColor()} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {props.title}
          </h2>
        </div>
        {props.description && (
          <p
            className={`text-[16px] pb-[30px] max-w-[770px] leading-[32px] font-[400] text-gray-600 dark:text-gray-400 `}
          >
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}
