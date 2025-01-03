"use client";
import Link from "next/link";
import React from "react";

type MobileMenuProps = {
  openNavbar: boolean;
  handleOpenNav: () => void;
  isActive: (id: string) => "text-primary-blue font-bold" | "";
};

export default function MobileMenu({
  openNavbar,
  handleOpenNav,
  isActive,
}: MobileMenuProps) {
  return (
    <div className={`flex flex-col items-center gap-4 py-4`}>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("home")}`}
          href={"/me#home"}
          onClick={handleOpenNav}
        >
          Home
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("about")}`}
          href={"/me#about"}
          onClick={handleOpenNav}
        >
          About
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("projects")}`}
          href={"/me#projects"}
          onClick={handleOpenNav}
        >
          Projects
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("services")}`}
          href={"/me#services"}
          onClick={handleOpenNav}
        >
          Services
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("tech")}`}
          href={"/me#tech"}
          onClick={handleOpenNav}
        >
          Tech
        </Link>
      </div>
      <div className="my-2 text-xl font-semibold">
        <Link
          className={`${isActive("contact")}`}
          href={"/me#contact"}
          onClick={handleOpenNav}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
