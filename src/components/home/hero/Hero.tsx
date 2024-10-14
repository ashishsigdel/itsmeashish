import { Button } from "@/components/common";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative">
      <motion.div
        className="text-center relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="text-sm text-white/60 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, ...floatingAnimation }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Home
        </motion.span>
        <motion.h1
          className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0, ...floatingAnimation }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I&#39;m Ashish
        </motion.h1>
        <motion.h3
          className="text-[24px] sm:text-[30px] md:text-[36px] leading-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0, ...floatingAnimation }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          an <span className="text-primary">AI Enthusiast</span> and Creative{" "}
          <span className="text-primary">Developer</span>
        </motion.h3>
        <motion.p
          className="text-sm mt-10 text-primary-yellow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0, ...floatingAnimation }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Dedicated to creating robust web applications <br />
          and exploring artificial intelligence and machine learning...
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="#contact" className="mx-auto">
            <Button title="Contact Me" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 my-10"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
      >
        <div className="h-[60px] bg-gradient-to-t from-primary-border-color to-transparent w-[2px] mx-auto"></div>
        <div className="h-[60px] bg-gradient-to-b from-primary-border-color to-transparent w-[2px] mx-auto"></div>
      </motion.div>
    </div>
  );
}
