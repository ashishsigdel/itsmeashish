import { ThemeToggler } from "@/utlis";
import Link from "next/link";
import React from "react";

export default function LinkSection() {
  return (
    <div className="flex gap-5 md:gap-10 items-center mr-4">
      <Link href={"/asprog/browse"}>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 rounded-full font-semibold">
          <p className="text-light">Browse</p>
        </div>
      </Link>
      <ThemeToggler />
    </div>
  );
}
