"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaYoutube } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { MemberForm } from "@/components/asprog/home";
import Link from "next/link";

export default function Home() {
  const [subscriberCount, setSubscriberCount] = useState(100);

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCj84aDv6J2qmdggJFFiCbwQ&key=AIzaSyApUTcTauIyxlAxMUOFNVSe6cowJKSdUes`
        );
        const data = await response.json();
        const count = data.items[0].statistics.subscriberCount;
        setSubscriberCount(count);
      } catch (error) {
        console.error("Error fetching subscriber count:", error);
      }
    };

    fetchSubscriberCount();
  }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-16 w-full h-full p-3 md:p-5">
        {/* Left Section */}
        <div className="flex-1 flex flex-col max-w-2xl mx-auto h-full justify-center items-start mt-[10%] lg:mt-0">
          <h1 className="text-[42px] md:text-[57px] leading-[50px] md:leading-[60px] font-[900]">
            Welcome to <span className="text-purple-500">asProg·</span> <br />{" "}
            Master <br /> <span className="text-blue-500">Programming</span>{" "}
            With <br />a{" "}
            <span className="text-purple-500">Community-Driven</span> Approach
          </h1>

          <h3 className="text-[18px] font-normal mt-5 leading-7 text-gray-700 dark:text-gray-400">
            Gain practical experience and elevate your skills to build the
            applications you&#39;ve always envisioned.
          </h3>

          <Link href={"/asprog/browse"}>
            <button className="mt-8 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all flex items-center gap-3">
              Get Started
              <FaArrowRight />
            </button>
          </Link>

          <Link
            href={"https://www.youtube.com/@as-prog?sub_confirmation=1"}
            target="__blank"
            className="mt-12 hidden lg:block"
          >
            <p className=" gap-3 text-[18px] font-normal flex">
              <FaYoutube size={32} className="text-red-600" />
              {subscriberCount}+
            </p>
            <p className="font-normal">Subscribers</p>
          </Link>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 flex justify-center lg:justify-end items-center w-full h-full">
          <div className="w-full max-w-md shadow-2xl shadow-hard-dark/10 dark:shadow-light/10">
            <MemberForm />
          </div>
        </div>

        {/* Floating Button */}
        <div className="fixed bottom-12 right-12 bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
          <SiBuymeacoffee className="text-black text-3xl" />
        </div>

        <Link
          href={"https://www.youtube.com/@as-prog?sub_confirmation=1"}
          target="__blank"
          className="mt-12 block lg:hidden"
        >
          <p className=" gap-3 text-[18px] font-normal flex">
            <FaYoutube size={32} className="text-red-600" />
            {subscriberCount}+
          </p>
          <p className="font-normal">Subscribers</p>
        </Link>
      </div>
    </>
  );
}
