"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiList } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MobileMenu } from "@/components/header";
import { navigationLinks } from "@/data/navigationData";
import { motion, AnimatePresence } from "framer-motion";

export default function LinkSection() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-50% 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("div[id]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (label: string) => {
    const sectionId = label.toLowerCase().replace(" ", "");
    return activeSection === sectionId;
  };

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <>
      <motion.div
        className="hidden md:flex gap-4 justify-center items-center h-full border-primary-border-color bg-black/30 px-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {navigationLinks.map(({ href, icon: Icon, label }, index) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Link href={href}>
              <div
                className={`group relative cursor-pointer hover:text-primary ${
                  isActive(label) ? "text-white/90" : "text-white/40"
                }`}
                aria-current={isActive(label) ? "page" : undefined}
              >
                <Icon className="text-[1.2rem]" />
                <motion.span
                  className="absolute left-1/2 transform -translate-x-1/2 top-7 bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap z-[999]"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        onClick={handleOpenNav}
        className="w-[40px] h-full flex justify-center items-center md:hidden mr-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={openNavbar ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {openNavbar ? (
              <MdClose className="text-xl cursor-pointer" />
            ) : (
              <FiList className="text-xl cursor-pointer" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="w-full absolute top-[4rem]">
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </>
  );
}
