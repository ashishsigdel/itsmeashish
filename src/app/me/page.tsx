import { Hero } from "@/components/me/home";
import React from "react";

export default function Page() {
  return (
    <>
      <div className="w-full bg-light dark:bg-[#0f141b]">
        <div className="w-full mx-auto lg:h-[calc(100vh-6rem)]">
          <div id="#home">
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
}
