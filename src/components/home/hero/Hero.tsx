import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col justify-center text-center">
      <span className="text-sm text-white/60 -mt-10">Home</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        Hi, I&#39;m Ashish
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        an <span className="text-primary">AI Enthusiast</span> and Creative{" "}
        <span className="text-primary">Developer</span>
      </h3>
      <p className="text-sm mt-10 text-gray-color">
        Dedicated to creating robust web applications <br />
        and exploring artificial intelligence and machine learning...
      </p>
    </div>
  );
}
