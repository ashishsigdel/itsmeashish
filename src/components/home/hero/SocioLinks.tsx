"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { socialLinks } from "@/types/constant";
import { useState } from "react";

export default function SocioLinks() {
  const [openLinks, setOpenLinks] = useState(false);
  const handleClick = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="w-10 h-10 bg-black rounded-full flex items-center justify-center"
      >
        <FaLink className="text-gray-300" size={20} />
      </div>
      {openLinks && (
        <div className="flex flex-col justify-center items-center gap-3 bg-black p-2 w-8">
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
              <FaLinkedin />
            </div>
          </Link>
          <Link
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
              <FaInstagram />
            </div>
          </Link>
          <Link
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
              <FaFacebook />
            </div>
          </Link>
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
              <FaGithub />
            </div>
          </Link>
          <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer">
            <div className="relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
              <FaXTwitter />
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
