import React from "react";

export default function AboutHero() {
  return (
    <div className="min-h-[calc(100vh+40px)] flex flex-col justify-center text-center">
      <span className="text-sm text-white/60 -mt-10 uppercase">About</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        Who I Am
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        a <span className="text-primary-blue">Closer Look</span>
      </h3>
      <p className="text-sm mt-10 text-primary-yellow">
        Welcome, as I unveil myself, my workflows, the technologies <br /> I
        like to use to bring my projects to life..
      </p>
      <div className="h-[48px] bg-gradient-to-t from-primary-border-color to-transparent w-[1.5px] mx-auto mt-5"></div>
      <div className="h-[48px] bg-gradient-to-b from-primary-border-color to-transparent w-[1.5px] mx-auto"></div>
    </div>
  );
}
