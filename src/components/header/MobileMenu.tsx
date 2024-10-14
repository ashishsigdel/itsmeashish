"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navigationLinks } from "@/data/navigationData";
import { motion, AnimatePresence } from "framer-motion";

interface propsTypes {
  openNavbar: boolean;
  handleOpenNav: () => void;
}

const MobileMenu: React.FC<propsTypes> = ({ openNavbar, handleOpenNav }) => {
  const isActive = (href: string) => {
    return false;
  };

  return (
    <AnimatePresence>
      {openNavbar && (
        <motion.div
          className="bg-black md:hidden blur-bg absolute w-full z-[9999] overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.ul
            className="flex flex-col items-center gap-6 w-full py-10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 },
              },
            }}
          >
            {navigationLinks.map(({ href, icon: Icon, label }) => (
              <motion.li
                key={href}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
              >
                <Link
                  href={href}
                  className={`mx-auto ${
                    isActive(href) ? "text-primary" : "text-white/90"
                  }`}
                >
                  <motion.div
                    className="text-[18px] cursor-pointer flex items-center gap-3 mx-auto"
                    onClick={handleOpenNav}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon />
                    {label}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
