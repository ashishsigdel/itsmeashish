"use client";

import React from "react";
import "@/styles/sectionTitle.scss";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

interface sectionTitleProps {
  title: String;
  description?: String;
}

export default function SectionTitle(props: sectionTitleProps) {
  const selectedColor = useSelector((state: any) => state.color.color);

  return (
    <div className="mt-[4.3rem] mb-2">
      <div className="flex justify-center items-center flex-col text-center">
        <div className="relative w-full whitespace-nowrap text-center">
          <h2 className="opacity-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold stoke-title">
            {props.title}
          </h2>
          <h2
            style={{ color: `rgb(${selectedColor})` }}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
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
