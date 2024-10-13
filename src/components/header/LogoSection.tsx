import React from "react";
import logo from "@/assets/logo/coding.svg";
import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="h-full flex items-center">
      <div className="w-[40px] h-full flex justify-center items-center border-r border-primary/20 overflow-hidden">
        <Image
          src={logo}
          alt="Logo"
          width={20}
          height={20}
          className="invert"
        />
      </div>
      <p className="ml-[12px] font-semibold tracking-wider text-[18px]">
        Ashish<span className="text-primary">&lt;Sigdel&gt;</span>
      </p>
    </div>
  );
}
