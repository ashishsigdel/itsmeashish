import { Browse } from "@/components/asprog/browse";
import React from "react";

export default function page() {
  return (
    <div className="w-full bg-light dark:bg-[#0f141b]">
      <div className="w-full max-w-7xl mx-auto px-5 min-h-[calc(100vh-6rem)]">
        <Browse />
      </div>
    </div>
  );
}
