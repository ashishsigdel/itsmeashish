"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import { FiList } from "react-icons/fi";
import MobileMenu from "@/components/outline/MobileMenu";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const pathname = usePathname();

  const whichColor = () => {
    if (pathname === "/") return "text-primary";
    if (pathname === "/about") return "text-primary-blue";
    if (pathname === "/contact") return "text-primary-red";
  };

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div className="w-full">
      <div className="w-full border-b border-primary-border-color h-[40px] flex items-center justify-between bg-black/30 blur-bg relative">
        <div className="w-[40px] h-full flex justify-center items-center border-r border-primary-border-color overflow-hidden">
          <Image
            src={logo}
            alt="Logo"
            width={20}
            height={20}
            className="invert"
          />
        </div>
        <div className="mx-auto">
          <p className="text-center font-semibold tracking-wider">
            Ashish<span className={`${whichColor()}`}>&lt;Sigdel&gt;</span>
          </p>
        </div>
        <div
          onClick={handleOpenNav}
          className="w-[40px] h-full flex justify-center items-center md:hidden"
        >
          {openNavbar ? (
            <MdClose className="text-xl cursor-pointer" />
          ) : (
            <FiList className="text-xl cursor-pointer" />
          )}
        </div>
      </div>
      <div className="w-full relative">
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </div>
  );
}
