"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "@/redux/features/colorSlice";
import { motion } from "framer-motion";

interface ColorControlProps {
  onClose: () => void;
}

export default function ColorControl({ onClose }: ColorControlProps) {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: any) => state.color.color);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colors = [
    { label: "g", rgb: "55, 200, 113" },
    { label: "y", rgb: "225, 184, 79" },
    { label: "p", rgb: "86, 55, 200" },
    { label: "r", rgb: "225, 79, 98" },
  ];

  return (
    <div
      className={`rounded-md p-3 absolute flex flex-col items-center justify-center gap-2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {colors.map((color, index) => (
        <motion.div
          key={index}
          className={`w-[30px] h-[30px] rounded-full cursor-pointer border-2 ${
            selectedColor === color.rgb ? "border-red-700" : "border-gray-300"
          }`}
          style={{ backgroundColor: `rgb(${color.rgb})` }}
          onClick={() => {
            dispatch(setColor(color.rgb));
            onClose();
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        />
      ))}
    </div>
  );
}
