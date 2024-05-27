import React from "react";

export default function ContactHero() {
  return (
    <div className="min-h-[calc(100vh+40px)] flex flex-col justify-center text-center">
      <span className="text-sm text-white/60 -mt-10 uppercase">Contact</span>
      <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold">
        Get In Touch
      </h1>
      <h3 className="text-[24px] sm:text-[30px] md:text-[36px] leading-7">
        Let&#39;s <span className="text-primary-red">Connect </span>
        and <span className="text-primary-red">Create Together!</span>
      </h3>
      <p className="text-sm mt-10 text-primary-yellow">
        Whether you have a project you want to work on together or just want to
        have
        <br /> a chat, you are in the right place: let&#39;s get in touch.
      </p>
      <div className="h-[48px] bg-gradient-to-t from-primary-border-color to-transparent w-[1.5px] mx-auto mt-5"></div>
      <div className="h-[48px] bg-gradient-to-b from-primary-border-color to-transparent w-[1.5px] mx-auto"></div>
    </div>
  );
}
