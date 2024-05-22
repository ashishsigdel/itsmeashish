import React from "react";
import { FaFingerprint, FaSkiing } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

interface propsTypes {
  openNavbar: Boolean;
  handleOpenNav: () => void;
}

const MobileMenu: React.FC<propsTypes> = ({ openNavbar, handleOpenNav }) => {
  return (
    <div
      className={`bg-black/75 md:hidden blur-bg transition-max-height duration-500 absolute w-full ease-in-out overflow-hidden ${
        openNavbar ? "max-h-[500px] py-10" : "max-h-0"
      }`}
    >
      <ul className="flex flex-col gap-6 w-full">
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <IoHome />
          Home
        </li>
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <FaFingerprint />
          About Me
        </li>
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <RiApps2Fill />
          My Portfolio
        </li>
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <FaSkiing />
          My Skills
        </li>
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <FaDesktop />
          My Services
        </li>
        <li
          className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
          onClick={handleOpenNav}
        >
          <RiContactsBook3Fill />
          Contact Me
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
