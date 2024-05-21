import React from "react";
import { BottomBar, LeftBar, TopBar } from "@/components/outline";

export default function Outline({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen p-2">
      <div className="w-full h-full border border-primary-border-color rounded-md flex flex-col overflow-hidden">
        <TopBar />
        <div className="flex overflow-y-auto h-full">
          <div className="h-full">
            <LeftBar />
          </div>
          <div className="w-full mx-auto overflow-y-auto h-full">
            {children}
          </div>
        </div>
        <BottomBar />
      </div>
    </div>
  );
}
