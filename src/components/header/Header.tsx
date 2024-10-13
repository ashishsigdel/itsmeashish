import React from "react";
import { LinkSection, LogoSection } from "@/components/header";
import { MdClose } from "react-icons/md";
import { FiList } from "react-icons/fi";

export default function Header() {
  return (
    <div className="sticky top-0 h-[4rem] z-[999] border border-primary/20 bg-black">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between ">
        <LogoSection />
        <LinkSection />
      </div>
    </div>
  );
}
