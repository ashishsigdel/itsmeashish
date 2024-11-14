"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

interface MemberFormProps {
  which: string;
  handleClick?: () => void;
}

export default function MemberForm({ which, handleClick }: MemberFormProps) {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition duration-300">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
        {which === "register" ? "Join as a Member" : "Login to Your Account"}
      </h1>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-5">
        {which === "register"
          ? "Join our community and start building your skills today!"
          : "Welcome back! Please sign in to continue."}
      </p>

      <form onSubmit={handleClick} className="flex flex-col gap-6">
        {which === "register" && (
          <div>
            <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        )}

        {/* Email Field */}
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300"
        >
          {which === "register" ? "Join Now" : "Sign In"}
        </button>
      </form>

      {/* Google OAuth Button */}
      <div className="flex items-center my-6">
        <hr className="w-full border-gray-300 dark:border-gray-700" />
        <span className="px-4 text-gray-500 dark:text-gray-400 font-medium">
          OR
        </span>
        <hr className="w-full border-gray-300 dark:border-gray-700" />
      </div>

      <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
        <FaGoogle size={18} />
        {which === "register" ? "Sign up with Google" : "Sign in with Google"}
      </button>

      {/* Toggle Sign Up / Sign In */}
      <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
        {which === "register" ? "Already a member?" : "New here?"}{" "}
        <Link href={which === "register" ? "/login" : "/register"}>
          <button className="text-purple-600 dark:text-purple-400 font-medium hover:underline">
            {which === "register" ? "Sign in here" : "Join now"}
          </button>
        </Link>
      </p>
    </div>
  );
}
