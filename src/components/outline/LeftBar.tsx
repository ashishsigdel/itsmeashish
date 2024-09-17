import { useState, useEffect } from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaFingerprint, FaDesktop, FaCode } from "react-icons/fa";
import { RiApps2Fill, RiContactsBook3Fill } from "react-icons/ri";

export default function LeftBar() {
  const [activeSection, setActiveSection] = useState<string>("home");

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
      { threshold: 0.7 } // Adjust this value if needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (id: string) => {
    return activeSection === id;
  };

  return (
    <div className="hidden md:flex flex-col gap-4 justify-center items-center w-[40px] h-full border-r border-primary-border-color bg-black/30">
      <Link href="#home">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("home") ? "text-white/90" : "text-white/40"
          }`}
        >
          <IoHome />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Home
          </span>
        </div>
      </Link>

      <Link href="#about">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("about") ? "text-white/90" : "text-white/40"
          }`}
        >
          <FaFingerprint />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            About Me
          </span>
        </div>
      </Link>

      <Link href="#portfolio">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("portfolio") ? "text-white/90" : "text-white/40"
          }`}
        >
          <RiApps2Fill />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            My Portfolio
          </span>
        </div>
      </Link>

      <Link href="#services">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("services") ? "text-white/90" : "text-white/40"
          }`}
        >
          <FaDesktop />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            My Services
          </span>
        </div>
      </Link>

      <Link href="#technologies">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("technologies") ? "text-white/90" : "text-white/40"
          }`}
        >
          <FaCode />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Technologies
          </span>
        </div>
      </Link>

      <Link href="#contact">
        <div
          className={`group relative cursor-pointer hover:text-primary ${
            isActive("contact") ? "text-white/90" : "text-white/40"
          }`}
        >
          <RiContactsBook3Fill />
          <span className="absolute left-12 top-0 opacity-0 group-hover:opacity-100 group-hover:left-8 group-hover:top-0 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
            Contact Me
          </span>
        </div>
      </Link>
    </div>
  );
}
