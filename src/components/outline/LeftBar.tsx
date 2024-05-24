import React from "react";
import { FaFingerprint, FaSkiing } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

export default function LeftBar() {
  return (
    <div className="hidden md:flex flex-col gap-4 justify-center items-center w-[40px] h-full border-r border-primary-border-color bg-black/30 ">
      <div className="group relative cursor-pointer hover:text-primary text-white/90">
        <IoHome />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          Home
        </span>
      </div>
      <div className="group relative cursor-pointer hover:text-primary text-white/40">
        <FaFingerprint />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          About Me
        </span>
      </div>
      <div className="group relative cursor-pointer hover:text-primary text-white/40">
        <RiApps2Fill />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          My Portfolio
        </span>
      </div>
      <div className="group relative cursor-pointer hover:text-primary text-white/40">
        <FaDesktop />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          My Services
        </span>
      </div>
      <div className="group relative cursor-pointer hover:text-primary text-white/40">
        <RiContactsBook3Fill />
        <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
          Contact Me
        </span>
      </div>
    </div>
  );
}
