"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdError } from "react-icons/md"; // Importing the error icon
import { useSelector } from "react-redux";
import { Button } from "@/components/common";
import { FaArrowLeft, FaBackspace } from "react-icons/fa";
import Link from "next/link";

export default function ProjectNotFound() {
  const selectedColor = useSelector((state: any) => state.color.color);

  const router = useRouter();

  return (
    <div className=" flex flex-col items-center justify-center p-5 w-full">
      {/* Error Icon */}
      <div className="mb-8">
        <MdError className="w-24 h-24 text-red-500" />
      </div>

      {/* Main Message */}

      <h1 className="text-4xl font-bold mb-4 text-red-500">
        404 - Project Not Found
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        Oops! The project you are looking for doesn’t exist or has been removed.
      </p>

      <button
        onClick={() => router.back()}
        rel="noopener noreferrer"
        className="flex gap-2 items-center justify-center dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-white py-3 px-4 rounded-md border border-gray-300 dark:border-gray-700"
      >
        <FaArrowLeft className="hover:text-primary-color transition" />
        <p>Go back</p>
      </button>

      <p className="mt-4 text-gray-200">
        Or you can{" "}
        <a href="/me" className="text-blue-500 hover:underline">
          return to the homepage
        </a>
        .
      </p>
    </div>
  );
}
