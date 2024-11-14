"use client";
import Link from "next/link";
import React from "react";

type MobileMenuProps = {
  openNavbar: boolean;
  handleOpenNav: () => void;
};

export default function MobileMenu({
  openNavbar,
  handleOpenNav,
}: MobileMenuProps) {
  return (
    <div className={`flex flex-col items-center gap-4 py-4`}>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#home"} onClick={handleOpenNav}>
          Home
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#about"} onClick={handleOpenNav}>
          About
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#projects"} onClick={handleOpenNav}>
          Projects
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#services"} onClick={handleOpenNav}>
          Services
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#tech"} onClick={handleOpenNav}>
          Tech
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link href={"#contact"} onClick={handleOpenNav}>
          Contact
        </Link>
      </div>
    </div>
  );
}
