"use client";

import React, { useEffect } from "react";
import { preLoaderAnim } from "@/animation";
import "@/styles/preloader.scss";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>AI Enthusiast,</span>
        <span>Designer.</span>
      </div>
    </div>
  );
};

export default PreLoader;
