import React from "react";

export default function PortfolioHero() {
  return (
    <div className="min-h-[calc(100vh+40px)] flex flex-col justify-center text-center">
      <span className="text-sm text-white/60 -mt-10 uppercase">Portfolio</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        A collection
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        of my best <span className="text-primary-blue">projects</span>
      </h3>
      <p className="text-sm mt-10 text-primary-yellow">
        With many years of experience, I acquired extensive experience in the
        <br />
        field of web-develop, machine learnings and designing...
      </p>
      <div className="h-[48px] bg-gradient-to-t from-primary-border-color to-transparent w-[1.5px] mx-auto mt-5"></div>
      <div className="h-[48px] bg-gradient-to-b from-primary-border-color to-transparent w-[1.5px] mx-auto"></div>
    </div>
  );
}
