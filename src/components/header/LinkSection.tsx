"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiList } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { MobileMenu } from "@/components/header";
import { navigationLinks } from "@/data/navigationData";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose, IoMdSettings } from "react-icons/io";
import { ColorControl } from "@/utlis";

export default function LinkSection() {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const [openColorChoose, setOpenColorChoose] = useState(false);

  const handleOpenNav = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleColorChoose = () => {
    setOpenColorChoose(!openColorChoose);
  };

  const handleCloseColorControl = () => {
    setOpenColorChoose(false);
  };

  return (
    <>
      <motion.div
        className="hidden md:flex gap-4 justify-center items-center h-full bg-black/30 px-6"
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
              <div className="group relative cursor-pointer hover:text-primary text-white/40">
                <Icon className="text-[1.2rem]" />
                <span className="absolute left-1/2 transform -translate-x-1/2 top-7 opacity-0 group-hover:opacity-100 group-hover:top-10 bg-white text-black text-xs rounded py-1 px-2 transition-all duration-300 whitespace-nowrap z-[999]">
                  {label}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Settings icon for color picker */}
        <div
          onClick={handleColorChoose}
          className="w-[40px] h-full flex justify-center items-center"
        >
          {openColorChoose ? (
            <IoMdClose className="text-[22px] text-white/60 hover:text-primary cursor-pointer" />
          ) : (
            <IoMdSettings className="text-[22px] text-white/60 hover:text-primary cursor-pointer rotate-anim" />
          )}
          {/* Color picker section */}
          {openColorChoose && (
            <div className="absolute top-[3.5rem] right-[4.8rem]">
              <ColorControl onClose={handleCloseColorControl} />
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        className="w-[40px] h-full flex gap-5 justify-center items-center md:hidden mr-7"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          onClick={handleColorChoose}
          className="w-[40px] h-full flex justify-center items-center md:hidden"
        >
          {openColorChoose ? (
            <IoMdClose className="text-[22px] text-white/60 hover:text-primary cursor-pointer" />
          ) : (
            <IoMdSettings className="text-[22px] text-white/60 hover:text-primary cursor-pointer rotate-anim" />
          )}
          {/* Color picker section */}
          {openColorChoose && (
            <div className="absolute top-[3.5rem] right-[4.5rem]">
              <ColorControl onClose={handleCloseColorControl} />
            </div>
          )}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={openNavbar ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            onClick={handleOpenNav}
          >
            {openNavbar ? (
              <MdClose className="text-xl cursor-pointer" />
            ) : (
              <FiList className="text-xl cursor-pointer" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="w-full absolute top-[55px]">
        <MobileMenu openNavbar={openNavbar} handleOpenNav={handleOpenNav} />
      </div>
    </>
  );
}
