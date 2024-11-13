"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  // Animation variants for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and move upwards
    visible: { opacity: 1, y: 0 }, // End with opacity 1 and original position
  };

  return (
    <div className="w-full bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color">
      <div className="p-2 border-b border-primary-border-color">
        <span className="">about-me</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-3">
        {/* Animate each paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible" // Change from animate to whileInView
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-700 mr-1">01.</span>Hello, Nice to meet
          you! I&#39;m Ashish, a{" "}
          <span className="text-primary-blue">Computer Engineering</span>{" "}
          student.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible" // Change from animate to whileInView
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-700 mr-1">02.</span>
          I&#39;m passionate about{" "}
          <span className="text-primary-yellow">Full Stack Development </span>
          as well as <span className="text-primary-red">Machine Learning </span>
          and{" "}
          <span className="text-primary-red"> Artificial intelligence.</span>
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible" // Change from animate to whileInView
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-700 mr-1">03.</span>
          With expertise in the{" "}
          <span className="text-primary-yellow">MERN, MEAN</span> and
          <span className="text-primary-yellow"> Next.js</span> stacks, I thrive
          on creating seamless <span className="text-primary-blue">UX</span>{" "}
          with <span className="text-primary-red">robust backend</span>.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible" // Change from animate to whileInView
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-700 mr-1">04.</span>
          Beyond coding, I <span className="text-primary-red">love</span>{" "}
          staying <span className="text-primary-yellow">up-to-date</span> with
          <span className="text-primary-blue"> tech trends</span> and enjoying
          the <span className="text-primary-blue">outdoors</span>.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible" // Change from animate to whileInView
          variants={paragraphVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-700 mr-1">05.</span>
          Also 3+ years of playing with{" "}
          <span className="text-primary-yellow">Photoshop, </span> I have
          knowledge about the art of
          <span className="text-primary-yellow"> Photomanipulation </span>and
          <span className="text-primary-blue"> graphic design</span>.
        </motion.p>
      </div>
    </div>
  );
}
