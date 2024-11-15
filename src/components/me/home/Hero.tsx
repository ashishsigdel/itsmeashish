import React from "react";
import memojiImage from "@/assets/auth/reg-mascot.webp";
import Image from "next/image";
import { FaArrowDown, FaFileContract } from "react-icons/fa";
import grainImage from "@/assets/grain.jpeg";
import starIcon from "@/assets/icons/star.svg";
import sparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/me/home";
import { starRotate, sparkRotate, dotRotate } from "@/data/starrotate";

export default function Hero() {
  return (
    <div className="py-32 md:py-40 lg:py-[12rem] min-h-[calc(100vh-6rem)] relative z-0 overflow-x-clip overflow-y-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      {/* Centered Rectangle */}
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
      <div className="size-[1420px] hero-ring"></div>
      {starRotate.map((orbit, index) => (
        <HeroOrbit
          key={`star-${index}`}
          size={orbit.size}
          rotation={orbit.rotation}
          shouldOrbit={orbit?.shouldOrbit}
          orbitDuration={orbit?.orbitDuration}
          shouldSpin={orbit?.shouldSpin}
          spinDuration={orbit?.spinDuration}
        >
          <Image
            src={starIcon}
            alt="Star icon"
            width={orbit.width}
            height={orbit.width}
            style={{
              filter:
                "invert(66%) sepia(80%) saturate(1866%) hue-rotate(190deg) brightness(79%) contrast(101%)",
            }}
          />
        </HeroOrbit>
      ))}

      {sparkRotate.map((orbit, index) => (
        <HeroOrbit
          key={`spark-${index}`}
          size={orbit.size}
          rotation={orbit.rotation}
          shouldOrbit={orbit?.shouldOrbit}
          orbitDuration={orbit?.orbitDuration}
          shouldSpin={orbit?.shouldSpin}
          spinDuration={orbit?.spinDuration}
        >
          <Image
            src={sparkleIcon}
            alt="Spark icon"
            width={orbit.width}
            height={orbit.height}
            style={{
              filter:
                "invert(66%) sepia(80%) saturate(1866%) hue-rotate(190deg) brightness(30%) contrast(101%)",
            }}
          />
        </HeroOrbit>
      ))}

      {dotRotate.map((orbit, index) => (
        <HeroOrbit
          key={`spark-${index}`}
          size={orbit.size}
          rotation={orbit.rotation}
          shouldOrbit={orbit?.shouldOrbit}
          orbitDuration={orbit?.orbitDuration}
          shouldSpin={orbit?.shouldSpin}
        >
          <div
            style={{
              width: orbit.width,
              height: orbit.width,
            }}
            className={`bg-blue-500 opacity-40 rounded-full`}
          ></div>
        </HeroOrbit>
      ))}
      <div className="flex flex-col justify-center items-center text-center relative">
        <Image
          height={400}
          width={500}
          src={memojiImage}
          alt="Person peeking from behind laptop"
          className="size-[100px]"
        />
        <div className="bg-white dark:bg-hard-dark rounded-lg border border-gray-300 dark:border-gray-800 px-4 py-1.5 flex items-center gap-4">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide font-semibold">
          Hi I&#39;m Ashish <br />
          an AI Enthusiast, Creative Developer
        </h1>
        <p className="mt-4 text-center text-hard-dark/60 dark:text-white/60 md:text-lg">
          Dedicated to creating robust web applications and exploring artificial
          intelligence and machine learning...
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
        <button className="inline-flex items-center gap-2 border border-black/15 dark:border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My Work</span>
          <FaArrowDown />
        </button>
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl bg-purple-500 text-white">
          <span>👋</span>
          <span className="font-semibold">Let&#39;s Connect</span>
        </button>
      </div>
    </div>
  );
}
