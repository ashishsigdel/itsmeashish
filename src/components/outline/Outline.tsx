import React from "react";
import { BottomBar, LeftBar, TopBar } from "@/components/outline";

export default function Outline() {
  return (
    <div className="fixed w-screen h-screen p-2">
      <div className="w-full h-full border border-primary-border-color rounded-md flex flex-col overflow-hidden">
        <TopBar />
        <LeftBar />
        <BottomBar />
      </div>
    </div>
  );
}
