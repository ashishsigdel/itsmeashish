"use client";
import React, { useEffect, useState, useRef } from "react";
import { projects } from "@/data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Project() {
  const pathname = usePathname(); // Move usePathname to the top level
  const [project, setProject] = useState<any>(null);
  const [openForm, setOpenForm] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProject(projects[0]);
  }, []);

  // Close modal when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenForm(false);
      }
    }

    if (openForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openForm]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-7xl mx-auto">
      {/* Left Section - Project Details */}
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
        {/* 16:9 Aspect Ratio Preview Image */}
        <div
          className="relative w-full h-0 mb-8"
          style={{ paddingBottom: "56.25%" }}
        >
          <Image
            height={1000}
            width={1000}
            src={project.previewPic}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Render HTML description */}
        <div
          className="text-lg text-gray-700 dark:text-gray-300 mb-8"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Section - Links and Extra Details */}
      <div className="md:w-1/3 p-6 rounded-lg flex flex-col gap-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Links
        </h2>

        <div className="flex flex-col gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition text-center flex justify-center items-center gap-4"
            >
              <FaGlobe />
              View Demo
            </a>
          )}
          {project.sourceLink && (
            <button
              onClick={() => setOpenForm(true)}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition text-center flex justify-center items-center gap-4"
            >
              <FaGithub />
              View Source
            </button>
          )}
        </div>
      </div>

      {/* Modal Overlay */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-11/12 max-w-lg"
          >
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold text-center dark:text-gray-100 mb-4">
                Get Free Access!!!
              </h1>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-5">
                You can get the Full Source Code for{" "}
                <span className="text-purple-500 font-semibold">FREE</span> by
                filling out the Form below!
              </p>

              <form className="flex flex-col gap-6">
                <div>
                  <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-[8px] bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-800 dark:text-gray-300 font-medium mb-[6px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-[8px] bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Submit Button */}
                <Link href={`${pathname}/confirm`}>
                  <button
                    type="submit"
                    className="w-full mt-4 px-6 py-[8px] bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 dark:hover:bg-purple-500 transition-all duration-300"
                  >
                    Get Link
                  </button>
                </Link>
                {/* Privacy Policy Checkbox */}
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="privacy-policy"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Disclaimer: By entering your email, you accept our{" "}
                    <a
                      href="/asprog/privacy-policy"
                      className="text-purple-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy & Policy
                    </a>
                    .
                  </label>
                </div>
              </form>
              <div className="flex items-center my-6">
                <hr className="w-full border-gray-300 dark:border-gray-700" />
                <span className="px-4 text-gray-500 dark:text-gray-400 font-medium">
                  OR
                </span>
                <hr className="w-full border-gray-300 dark:border-gray-700" />
              </div>

              <Link href="/login">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-[8px] bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-gray-900 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
