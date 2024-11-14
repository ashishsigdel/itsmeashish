import React from "react";
import logo from "@/assets/logo/coding.svg";
import Image from "next/image";
import Link from "next/link";

export default function LogoSection() {
  return (
    <Link href={"/asprog"}>
      <div className="h-full flex items-center">
        <div className="w-[40px] h-full flex justify-center items-center border-hard-dark dark:border-light overflow-hidden rotate-90">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="dark:invert w-[26px]"
          />
        </div>
        <h1 className="ml-[12px] font-semibold tracking-wide text-[22px] md:text-[28px] whitespace-nowrap">
          Ashish Sigdel
        </h1>
      </div>
    </Link>
  );
}
