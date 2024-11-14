import React from "react";
import Image from "next/image";
import { FormField } from "@/components/auth";
import leftImage from "@/assets/auth/reg-mascot.webp";

export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Left Image */}
      <div className="flex-1 hidden md:flex items-center justify-center h-full bg-white dark:bg-gray-900">
        <Image
          height={500}
          width={500}
          src={leftImage}
          alt="Mascot"
          className="w-[80%] max-w-[400px] object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center h-full p-6 ">
        <FormField which="register" />
      </div>
    </div>
  );
}
