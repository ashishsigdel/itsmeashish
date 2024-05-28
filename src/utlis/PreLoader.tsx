"use client";

import React, { useEffect } from "react";
import { preLoaderAnim } from "@/animation";
import "@/styles/preloader.scss";
import Background from "./Background";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <Background color1="225, 184, 79" />
      <div className="preloader">
        <div className="texts-container">
          <span>Developer,</span>
          <span>AI Enthusiast,</span>
          <span>Designer.</span>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
