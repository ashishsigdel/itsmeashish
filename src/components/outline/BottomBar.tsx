"use client";
import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import { FiList } from "react-icons/fi";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"; // Import Link component from Next.js
import { socialLinks } from "@/types/constant"; // Import your social links
import { ColorControl } from "@/utlis";
import { useState } from "react";

export default function BottomBar() {
  const [openColorChoose, setOpenColorChoose] = useState(false);

  const handleColorChoose = () => {
    setOpenColorChoose(!openColorChoose);
  };

  const handleCloseColorControl = () => {
    setOpenColorChoose(false);
  };

  return (
    <div className="w-full border-t border-primary-border-color h-[40px] flex items-center justify-between bg-black/30 relative">
      <div
        onClick={handleColorChoose}
        className="w-[40px] h-full flex justify-center items-center border-r border-primary-border-color overflow-hidden"
      >
        {openColorChoose ? (
          <IoMdClose className="text-[22px] text-white/60 hover:text-primary cursor-pointer" />
        ) : (
          <IoMdSettings
            className={`text-[22px] text-white/60 hover:text-primary cursor-pointer ${
              !openColorChoose ? "rotate-icon" : ""
            }`}
          />
        )}
      </div>
      {openColorChoose && <ColorControl onClose={handleCloseColorControl} />}
      <div className="pr-[20px] h-full flex justify-center items-center gap-3">
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
            <FaLinkedin />
            <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              Linkedin
            </span>
          </div>
        </Link>
        <Link
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
            <FaInstagram />
            <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              Instagram
            </span>
          </div>
        </Link>
        <Link
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
            <FaFacebook />
            <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              Facebook
            </span>
          </div>
        </Link>
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
            <FaGithub />
            <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              Github
            </span>
          </div>
        </Link>
        <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer">
          <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
            <FaXTwitter />
            <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
              X
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
