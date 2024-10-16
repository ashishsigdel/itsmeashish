"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import myImage from "@/assets/me/me.jpg";
import { Button } from "@/components/common";
import Link from "next/link";

type TypewriterTextProps = {
  text: string;
  inView: boolean;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [inView, count, text.length]);

  return <motion.span>{displayText}</motion.span>;
};

export default function DiscussProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div className="flex flex-col  my-3 px-3 mx-auto">
      <motion.div
        ref={ref}
        className="rounded-ss-md bg-black/25 rounded-ee-md blur-bg border border-primary-border-color w-full mb-5 mt-5 z-[99]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="border-b h-fit w-full border-primary-border-color">
          <p className="p-3">collaboration</p>
        </div>
        <div className="flex flex-col sm:flex-row p-10 gap-10 items-center">
          <motion.div
            className="mx-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={myImage}
              alt="ashish"
              width={150}
              height={150}
              className="rounded-full"
            />
          </motion.div>
          <div className="flex flex-col">
            <p className="text-3xl sm:text-4xl md:text-5xl">
              <TypewriterText
                text="Let's work together on your next project"
                inView={isInView}
              />
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
