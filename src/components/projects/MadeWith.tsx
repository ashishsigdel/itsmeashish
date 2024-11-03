"use client";
import { SectionTitle } from "@/components/common";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiNodedotjs,
  SiFramer,
} from "react-icons/si";

const TechIcon = ({
  Icon,
  name,
}: {
  Icon: React.ElementType;
  name: string;
}) => (
  <div className="relative group">
    <Icon className="text-[52px]" />
    <span className="absolute left-1/2 -translate-x-1/2 top-16 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none">
      {name}
    </span>
  </div>
);

export default function MadeWith() {
  const technologies = [
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    { Icon: SiSass, name: "Sass" },
    { Icon: SiFramer, name: "Framer motion" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiNodedotjs, name: "Node.js" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <div className="flex flex-col justify-center  my-3 px-3 mx-auto min-h-[100vh-96px] text-white/90">
      <SectionTitle title={"Tech Behind This Website"} />
      <motion.div
        className="h-[7rem] bg-gradient-to-t from-primary-border-color to-transparent w-[1px] mx-auto"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        ref={ref}
        className="bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="p-3 md:p-5 flex justify-evenly flex-wrap gap-10"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <TechIcon Icon={tech.Icon} name={tech.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="h-[7rem] bg-gradient-to-b from-primary-border-color to-transparent w-[1px] mx-auto mb-5"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </div>
  );
}
