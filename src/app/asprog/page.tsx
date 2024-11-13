import { Home } from "@/components/asprog/home";
import React from "react";

export default function Page() {
  return (
    <div
      style={{ height: "calc(100vh - 6rem)" }}
      className="w-full bg-light dark:bg-[#0f141b]"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-5">
        <Home />
      </div>
    </div>
  );
}
