"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navigationLinks } from "@/data/navigationData";

interface propsTypes {
  openNavbar: boolean;
  handleOpenNav: () => void;
}

const MobileMenu: React.FC<propsTypes> = ({ openNavbar, handleOpenNav }) => {
  const pathname = usePathname();

  const isActive = (page: string) => {
    return page === pathname;
  };

  return (
    <div
      className={`bg-black md:hidden blur-bg transition-max-height duration-500 absolute w-full ease-in-out overflow-hidden ${
        openNavbar ? "max-h-[500px] py-10 " : "max-h-0"
      } z-[9999]`}
    >
      <ul className="flex flex-col gap-6 w-full">
        {navigationLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`mx-auto ${
              isActive(href) ? "text-primary" : "text-white/90"
            }`}
          >
            <li
              className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
              onClick={handleOpenNav}
            >
              <Icon />
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
