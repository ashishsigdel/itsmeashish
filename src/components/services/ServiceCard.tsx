"use client";
import React, { useState } from "react";
import "@/styles/projectCard.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const ServiceCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-ss-md bg-black/25 rounded-ee-md blur-bg border border-primary-border-color mx-auto group cursor-pointer w-full min-h-[200px] px-5 group">
      <div
        className={`flex justify-between items-center my-auto gap-3 py-10 h-[200px] transition-all duration-500 ${
          isOpen ? "border-b" : ""
        } border-primary-border-color`}
      >
        <div className="flex gap-3 items-center sm:px-5">
          <div className="">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Website Development
            </h3>
            <p className="text-white/60">
              Creating responsive and user-friendly websites.
            </p>
          </div>
        </div>
        <div
          className="bg-white/10 hover:bg-white/5 px-2 py-1.5 rounded-lg sm:mr-3 md:mr-5 transition duration-500"
          onClick={toggleAccordion}
        >
          {isOpen ? (
            <FaChevronUp className="text-white/80" />
          ) : (
            <FaChevronDown className="text-white/80" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden py-3 transition-max-height duration-700 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="w-full my-5 md:flex-grow sm:px-5 flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">
              Creating responsive and user-friendly websites.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">Full stack development expertise.</p>
          </div>
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">
              Developing sites that align with brand identity.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">
              Iterative development process for continuous enhancement.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">
              User testing to ensure optimal website performance.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TiTick />
            <p className="text-white/90">
              Collaborating to launch and maintain websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
