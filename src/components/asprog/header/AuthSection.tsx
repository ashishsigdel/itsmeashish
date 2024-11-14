"use client";
import { ThemeToggler } from "@/utlis";
import Link from "next/link";
import React from "react";

export default function AuthSection() {
  return (
    <div className="flex gap-5 md:gap-10 items-center mr-4">
      <div className="flex gap-4 items-center ">
        <Link className="hidden sm:block" href={"/register"}>
          <div className="font-semibold">
            <p className="text-hard-dark/70 dark:text-light">Register</p>
          </div>
        </Link>
        <Link href={"/login"}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 rounded-full font-semibold">
            <p className="text-light">Login</p>
          </div>
        </Link>
      </div>
      <ThemeToggler />
    </div>
  );
}
