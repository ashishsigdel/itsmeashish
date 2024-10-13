"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiList } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MobileMenu } from "@/components/header";
import { navigationLinks } from "@/data/navigationData";

export default function LinkSection() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (id: string) => activeSection === id;

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      <div className="hidden md:flex gap-4 justify-center items-center h-full border-primary-border-color bg-black/30 px-6">
        {navigationLinks.map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href}>
            <div
              className={`group relative cursor-pointer hover:text-primary ${
                isActive(label.toLowerCase().replace(" ", ""))
                  ? "text-white/90"
                  : "text-white/40"
              }`}
              aria-current={
                isActive(label.toLowerCase().replace(" ", ""))
                  ? "page"
                  : undefined
              }
            >
              <Icon className="text-[1.2rem]" />
              <span className="absolute left-1/2 transform -translate-x-1/2 top-7 opacity-0 group-hover:opacity-100 group-hover:top-10 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div
        onClick={handleOpenNav}
        className="w-[40px] h-full flex justify-center items-center md:hidden mr-3"
      >
        {openNavbar ? (
          <MdClose className="text-xl cursor-pointer" />
        ) : (
          <FiList className="text-xl cursor-pointer" />
        )}
      </div>
      <div className="w-full absolute top-[4rem]">
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </>
  );
}
