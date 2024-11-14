"use client";

import Image from "next/image";
import logo from "@/assets/logo/coding.svg";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/types/constant";

export default function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle the scroll to top button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="border-t border-white/10 bg-white dark:bg-hard-dark shadow-md shadow-hard-dark/5 dark:shadow-light/5 py-10 w-full relative">
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <MdOutlineKeyboardArrowUp className="text-2xl" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              src={logo}
              alt="Logo"
              width={26}
              height={26}
              className="invert rotate-90"
            />
            <p className="text-center font-bold tracking-wider text-2xl">
              Ashish<span className="text-primary">&lt;Sigdel&gt;</span>
            </p>
          </div>

          <div className="pr-[20px] h-full flex justify-center items-center gap-3  my-4 sm:my-0">
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
                <FaLinkedin className="text-xl" />
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
                <FaInstagram className="text-xl" />
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
                <FaFacebook className="text-xl" />
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
                <FaGithub className="text-xl" />
                <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
                  Github
                </span>
              </div>
            </Link>
            <Link
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative flex flex-col justify-center items-center cursor-pointer hover:text-primary text-white/60">
                <FaXTwitter className="text-xl" />
                <span className="absolute -top-16 opacity-0 group-hover:-top-8 group-hover:opacity-100 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
                  X
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-10 text-sm text-white/90 w-full">
          <p className="text-center">
            &copy; Ashish Sigdel 2024 - All Right Reserved!
          </p>
          <p className="text-center mt-2 font-semibold">
            Developed by:{" "}
            <Link href={socialLinks.facebook} className="underline font-medium">
              Ashish Sigdel
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
