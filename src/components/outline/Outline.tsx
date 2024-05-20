import React from "react";
import { BottomBar, LeftBar, RightBar, TopBar } from "@/components/outline";

export default function Outline() {
  return (
    <div className="fixed w-screen h-screen p-2">
      <div className="w-full h-full border border-primary-border-color rounded-md overflow-hidden">
        <TopBar />
      </div>
      {/*   <LeftBar />
      <RightBar />
      <BottomBar /> */}
    </div>
  );
}
