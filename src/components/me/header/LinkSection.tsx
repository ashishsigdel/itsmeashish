"use client";

import { MobileMenu } from "@/components/me/header";
import { ThemeToggler } from "@/utlis";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FiList } from "react-icons/fi";
import { MdClose } from "react-icons/md";

export default function LinkSection() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  useEffect(() => {
    if (pathname.split("/")[2] === "project") {
      setActiveSection("projects");
      return;
    }

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "services",
        "tech",
        "contact",
      ];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionHeight = rect.height;
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          // Check if more than 50% of the section is visible
          if (visibleHeight >= sectionHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }

      // Fallback to the last section if the scroll position is at the bottom of the page
      if (
        !currentSection &&
        window.scrollY + window.innerHeight >= document.body.scrollHeight
      ) {
        currentSection = sections[sections.length - 1];
      }

      // Update the active section
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (id: string) =>
    activeSection === id ? "text-primary-blue font-bold" : "";

  return (
    <>
      {/* Desktop Links Section */}
      <div className="hidden md:flex gap-4 justify-center items-center h-full px-6">
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "home"
            )}`}
            href="/me#home"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "about"
            )}`}
            href="/me#about"
          >
            About
          </Link>
        </div>
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "projects"
            )}`}
            href="/me#projects"
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "services"
            )}`}
            href="/me#services"
          >
            Services
          </Link>
        </div>
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "tech"
            )}`}
            href="/me#tech"
          >
            Tech
          </Link>
        </div>
        <div>
          <Link
            className={`hover:text-primary-blue font-semibold ${isActive(
              "contact"
            )}`}
            href="/me#contact"
          >
            Contact
          </Link>
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
        <MobileMenu
          openNavbar={openNavbar}
          handleOpenNav={handleOpenNav}
          isActive={isActive}
        />
      </div>
    </>
  );
}
