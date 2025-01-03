"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "@/styles/projectCard.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="rounded-ss-md bg-white dark:bg-black rounded-ee-md blur-bg border border-black/15 dark:border-white/15 mx-auto group cursor-pointer w-full min-h-[200px] px-5"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // On mount animation
      transition={{ duration: 0.5 }} // Smooth transition
    >
      <div
        className={`flex justify-between items-center my-auto gap-3 py-10 h-[200px] transition-all duration-500 ${
          isOpen ? "border-b" : ""
        } border-black/15 dark:border-white/15`}
      >
        <div className="flex gap-3 items-center sm:px-5">
          <div className="">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        </div>
        <div
          className="bg-white/10 hover:bg-white/5 px-2 py-1.5 rounded-lg sm:mr-3 md:mr-5 transition duration-500"
          onClick={toggleAccordion}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate the icon on toggle
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaChevronUp className="text-white/80" />
            ) : (
              <FaChevronDown className="text-white/80" />
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="overflow-hidden py-3"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }} // Animate height on toggle
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="w-full my-5 md:flex-grow sm:px-5 flex flex-col gap-3">
          {service.points.map((point) => (
            <div key={point.id} className="flex gap-2 items-center">
              <TiTick />
              <p className="text-hard-dark/80 dark:text-light/80">
                {point.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
