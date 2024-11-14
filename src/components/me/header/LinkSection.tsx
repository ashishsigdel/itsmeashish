"use client";
import { MobileMenu } from "@/components/me/header";
import { ThemeToggler } from "@/utlis";
import Link from "next/link";
import React, { useState } from "react";
import { FiList } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function LinkSection() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      {/* Desktop Links Section */}
      <div className="hidden md:flex gap-4 justify-center items-center h-full px-6">
        <div>
          <Link href={"#home"}>Home</Link>
        </div>
        <div>
          <Link href={"#about"}>About</Link>
        </div>
        <div>
          <Link href={"#projects"}>Projects</Link>
        </div>
        <div>
          <Link href={"#services"}>Services</Link>
        </div>
        <div>
          <Link href={"#tech"}>Tech</Link>
        </div>
        <div>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <ThemeToggler />
      </div>

      {/* Mobile Navbar Toggle */}
      <div className="h-full flex gap-6 justify-center items-center md:hidden mr-2">
        <ThemeToggler />
        <div onClick={handleOpenNav}>
          {openNavbar ? (
            <MdClose size={26} className="text-xl cursor-pointer" />
          ) : (
            <FiList size={26} className="text-xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu Section with Glassmorphism and animation */}
      <div
        className={`w-full absolute top-[6rem] left-0 bg-white/60 dark:bg-hard-dark/80 backdrop-blur-sm border border-hard-dark/5 dark:border-light/5 rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${
          openNavbar
            ? "translate-y-0 opacity-100 visible"
            : "translate-y-4 opacity-0 invisible"
        }`}
      >
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </>
  );
}
