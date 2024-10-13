"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/types/constant"; // Adjust the path if necessary
import { MdArrowOutward } from "react-icons/md";

export default function MeOnline() {
  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color h-fit">
      <div className="p-2 border-b border-primary-border-color">
        <span>me-online</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        {/* Animate each link */}
        {Object.entries(socialLinks).map(([key, value], index) => (
          <motion.div
            key={key}
            initial="hidden"
            whileInView="visible" // Change this to `whileInView`
            variants={linkVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.5 }} // Use viewport to trigger on scroll
          >
            <Link
              href={value}
              target="_blank"
              className="flex items-center gap-2"
            >
              <span className="text-gray-700 mr-1">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span
                className={`text-primary-${
                  index % 2 === 0 ? "blue" : "yellow"
                } cursor-pointer`}
              >
                {key}
              </span>
              <MdArrowOutward />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
