"use client";

import { PicsProps, projects } from "@/types/projects";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

interface ProjectDetailsProps {
  project: projects;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const selectedColor = useSelector((state: any) => state.color.color);

  // State to track the clicked image for zoom modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-5 w-full">
      {/* Cover Image */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {project.coverPhoto ? (
          <Image
            src={project.coverPhoto}
            layout="fill"
            objectFit="cover"
            alt="Cover Image"
          />
        ) : (
          <p>No Cover Image</p>
        )}
      </div>

      {/* Project Title & Description */}
      <div className="my-6">
        <h1
          style={{ color: `rgb(${selectedColor})` }}
          className="text-4xl font-semibold"
        >
          {project.title}
        </h1>
        <p className="text-xl font-medium mt-4">{project.description}</p>
      </div>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className="bg-gray-200 text-gray-800 text-sm font-semibold px-4 py-2 rounded"
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Preview Images */}
      {project.previewPics && project.previewPics.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Project Preview</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.previewPics.map((pic: PicsProps) => (
              <div
                key={pic.id}
                className="relative w-full cursor-pointer"
                style={{ paddingTop: "56.25%" }}
                onClick={() => setSelectedImage(pic.previewUrl)} // Open modal on click
              >
                <Image
                  src={pic.previewUrl}
                  layout="fill"
                  objectFit="cover"
                  alt={`Preview Image ${pic.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal for Zoomed Image */}
      {selectedImage &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative">
              <Image
                src={selectedImage}
                layout="intrinsic"
                width={1000}
                height={600}
                objectFit="contain"
                alt="Zoomed Preview"
              />
              <button
                className="absolute top-2 right-2 border border-white/15 text-black p-2 rounded-full"
                onClick={closeModal}
              >
                <IoClose className="text-white" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
