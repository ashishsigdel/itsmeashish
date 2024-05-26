"use client";

import "@/styles/background.scss";
import { useEffect } from "react";

interface BackgroundProps {
  color1?: string;
}
const Background: React.FC<BackgroundProps> = ({ color1 }) => {
  useEffect(() => {
    if (color1) document.documentElement.style.setProperty("--color1", color1);
  }, [color1]);
  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
      </div>
    </div>
  );
};

export default Background;
