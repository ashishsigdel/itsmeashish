"use client";

import { SectionTitle, Spinner } from "@/components/common";
import { AboutMe, ILove, MeOnline } from "@/components/about";
import myPicOne from "@/assets/me/myPicOne.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getActive } from "@/services/profileService";
import { motion } from "framer-motion";

interface ProfilePic {
  id: number;
  profileURL: string;
}

export default function Profile() {
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

  // Animation variants for different elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col justify-center my-3 px-3  mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Triggers animation once 50% of the section is in view
    >
      <SectionTitle title={"Profile Overview"} />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mx-auto mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Ensure each section animates when it comes into view
      >
        <motion.div
          className="py-5 md:py-10 w-full relative mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: false, amount: 0.5 }} // Only animates when 50% of it is in the viewport
        >
          <div className="md:sticky top-10 mx-auto">
            {!loading && profilePic?.profileURL ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.5 }} // Animate when in viewport
              >
                <Image
                  src={profilePic?.profileURL || myPicOne}
                  alt="My Picture"
                  width={400}
                  height={400}
                  className="rounded-md mx-auto md:mx-0"
                />
              </motion.div>
            ) : (
              <div className="flex items-center w-full h-full justify-center">
                <Spinner />
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="overflow-y-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: false, amount: 0.5 }} // Animate when 50% of the div is visible
        >
          <AboutMe />
          <motion.div className="flex my-5 gap-5" variants={fadeIn}>
            <ILove />
            <MeOnline />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
