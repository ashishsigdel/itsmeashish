import React from "react";
import { LinkSection, LogoSection } from "@/components/header";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="sticky top-0 h-[4rem] z-[999] border border-primary/20 bg-black"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between ">
        <LogoSection />
        <LinkSection />
      </div>
    </motion.div>
  );
}
