"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ILove() {
  // Animation variants for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move upwards
    visible: { opacity: 1, y: 0 }, // End with opacity 1 and original position
  };

  return (
    <div className="w-full bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color">
      <div className="p-2 border-b border-primary-border-color">
        <span>i-loves</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2">
        {/* Animate each item */}
        {[
          "Coding",
          "Listening to Music",
          "Exploring",
          "Money",
          "Photography",
          "Videography",
          "Watching Movies",
        ].map((item, index) => (
          <motion.p
            key={index}
            initial="hidden"
            whileInView="visible" // Change this to `whileInView`
            variants={paragraphVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.5 }} // Use viewport to trigger on scroll
          >
            <span className="text-gray-700 mr-1">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span
              className={`text-primary-${
                index % 3 === 0 ? "blue" : index % 3 === 1 ? "yellow" : "red"
              }`}
            >
              {item}
            </span>
          </motion.p>
        ))}
      </div>
    </div>
  );
}
