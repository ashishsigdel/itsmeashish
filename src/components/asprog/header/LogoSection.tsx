import React from "react";
import logo from "@/assets/logo/coding.svg";
import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link href={"/"}>
      <div className="h-full flex items-center">
        <div className="w-[40px] h-full flex justify-center items-center border-r border-hard-dark dark:border-light overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="dark:invert"
          />
        </div>
        <h1 className="ml-[12px] font-semibold tracking-wider text-[26px]">
          asProg.
        </h1>
      </div>
    </Link>
  );
}
