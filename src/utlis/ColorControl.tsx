"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "@/redux/features/colorSlice"; // Import action

interface ColorControlProps {
  onClose: () => void; // Add onClose prop
}

export default function ColorControl({ onClose }: ColorControlProps) {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state: any) => state.color.color);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colors = [
    { label: "g", rgb: "55, 200, 113" }, // Default green-like color
    { label: "y", rgb: "225, 184, 79" }, // Yellow-like color
    { label: "p", rgb: "86, 55, 200" }, // Purple-like color
    { label: "r", rgb: "225, 79, 98" }, // Red-like color
  ];

  return (
    <div
      className={`rounded-tr-md backdrop:blur-lg h-[40px] absolute ml-[40px] px-3 flex items-center justify-center gap-2 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-[24px] h-[24px] rounded-full cursor-pointer border-2 ${
            selectedColor === color.rgb && "border-red-700"
          }`}
          style={{ backgroundColor: `rgb(${color.rgb})` }}
          onClick={() => {
            dispatch(setColor(color.rgb)); // Dispatch color change
            onClose(); // Close the color picker
          }}
        ></div>
      ))}
    </div>
  );
}
