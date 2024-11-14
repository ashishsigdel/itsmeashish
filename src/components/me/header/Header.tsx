"use client";
import React from "react";
import { LinkSection, LogoSection } from "@/components/me/header";
import { usePathname } from "next/navigation";

export default function Header() {
  const url = usePathname();

  return (
    <div className="sticky top-0 h-[6rem] z-[999] border-b border-white/10 bg-white dark:bg-hard-dark shadow-md shadow-hard-dark/5 dark:shadow-light/5">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-3">
        <LogoSection />
        <LinkSection />
      </div>
    </div>
  );
}