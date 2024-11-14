import { BuyMeACoffeeFloating, Home } from "@/components/asprog/home";
import React from "react";

export default function Page() {
  return (
    <div className="w-full bg-light dark:bg-[#0f141b]">
      <div className="w-full max-w-7xl mx-auto px-5 lg:h-[calc(100vh-6rem)]">
        <Home />
      </div>
      <BuyMeACoffeeFloating />
    </div>
  );
}
