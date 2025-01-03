import { BuyMeACoffeeFloating } from "@/components/asprog/home";
import { Confirm } from "@/components/asprog/project";
import React from "react";

export default function page() {
  return (
    <div className="w-full bg-light dark:bg-[#0f141b]">
      <div className="w-full max-w-7xl mx-auto px-5 h-[calc(100vh-6rem)]">
        <Confirm />
      </div>
    </div>
  );
}
