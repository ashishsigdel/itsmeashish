"use client";

import { getActive } from "@/services/profileService";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import myPicOne from "@/assets/me/myPicOne.jpg";

interface ProfilePic {
  id: number;
  profileURL: string;
}

export default function Protrait() {
  const [profilePic, setProfilePic] = useState<ProfilePic | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProfilePic = async () => {
      setLoading(true);
      try {
        const response = await getActive();
        setProfilePic(response.data);
      } catch (error: any) {
        console.error("Error fetching profile picture:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfilePic();
  }, []);
  return (
    <div className="w-full max-w-[18rem] bg-white/40 dark:bg-black/40 rounded-ss-md rounded-ee-md blur-bg text-gray-700 dark:text-gray-300 border border-primary-border-color">
      <div className="p-2 border-b border-primary-border-color">
        <span>protrait</span>
      </div>
      <div className=" flex flex-col gap-2">
        <Image
          src={profilePic?.profileURL || myPicOne}
          alt="My Picture"
          width={400}
          height={400}
          className="w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}
