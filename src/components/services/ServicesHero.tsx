import React from "react";

export default function ServicesHero() {
  return (
    <div className="min-h-[calc(100vh+40px)] flex flex-col justify-center text-center">
      <span className="text-sm text-white/60 -mt-10 uppercase">Services</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        What I Offer
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        Bringing Your <span className="text-primary-blue">Vision</span> to{" "}
        <span className="text-primary-blue">Life</span>
      </h3>
      <p className="text-sm mt-10 text-primary-yellow">
        I combine cutting-edge technologies and proven workflows to deliver
        exceptional results. Explore how I can <br /> bring your projects to
        life and elevate your vision....
      </p>
      <div className="h-[48px] bg-gradient-to-t from-primary-border-color to-transparent w-[1.5px] mx-auto mt-5"></div>
      <div className="h-[48px] bg-gradient-to-b from-primary-border-color to-transparent w-[1.5px] mx-auto"></div>
    </div>
  );
}
