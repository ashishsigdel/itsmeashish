"use client";
import { PicsProps, projects } from "@/types/projects";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "@/components/common";
import Link from "next/link";

interface ProjectDetailsProps {
  project: projects;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const selectedColor = useSelector((state: any) => state.color.color);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImageIndex === null || !project.previewPics) return;
    const totalImages = project.previewPics.length;
    let newIndex;
    if (direction === "next") {
      newIndex = (selectedImageIndex + 1) % totalImages;
    } else {
      newIndex = (selectedImageIndex - 1 + totalImages) % totalImages;
    }
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="p-5 w-full">
      {/* Cover Image */}
      <motion.div
        className="relative w-full aspect-video"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {project.coverPhoto ? (
          <Image
            height={500}
            width={500}
            src={project.coverPhoto}
            layout="fill"
            objectFit="cover"
            alt="Cover Image"
          />
        ) : (
          <p>No Cover Image</p>
        )}
      </motion.div>

      {/* Project Title & Description */}
      <motion.div
        className="my-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          style={{ color: `rgb(${selectedColor})` }}
          className="text-4xl font-semibold"
        >
          {project.title}
        </h1>
        <p className="text-xl font-medium mt-4">{project.description}</p>
        <div className="flex gap-4 flex-wrap mt-4">
          {project.githubLink && (
            <Link target="_blank" href={project.githubLink}>
              <Button title={"View Source Code"} />
            </Link>
          )}
          {project.previewLink && (
            <Link target="_blank" href={project.previewLink}>
              <Button title={"Demo Website"} />
            </Link>
          )}
        </div>
      </motion.div>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
        </motion.div>
      )}

      {/* Preview Images */}
      {project.previewPics && project.previewPics.length > 0 && (
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Project Preview</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.previewPics.map((pic: PicsProps, index: number) => (
              <motion.div
                key={pic.id}
                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  height={500}
                  width={500}
                  src={pic.previewUrl}
                  layout="fill"
                  objectFit="cover"
                  alt={`Preview Image ${pic.id}`}
                  className="transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Modal for Zoomed Image */}
      {selectedImageIndex !== null &&
        project.previewPics &&
        project.previewPics[selectedImageIndex] &&
        createPortal(
          <motion.div
            className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <Image
                src={project.previewPics[selectedImageIndex].previewUrl}
                layout="intrinsic"
                width={1000}
                height={600}
                objectFit="contain"
                alt={`Zoomed Preview ${selectedImageIndex + 1}`}
                className="max-h-[90vh] w-auto"
              />
              <button
                className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-300"
                onClick={closeModal}
              >
                <IoClose className="text-white text-2xl" />
              </button>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/20 text-white p-2 rounded-full transition-colors duration-300"
                onClick={() => navigateImage("prev")}
              >
                <IoArrowBack className="text-white text-2xl" />
              </button>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/10 hover:bg-black/20 text-white p-2 rounded-full transition-colors duration-300"
                onClick={() => navigateImage("next")}
              >
                <IoArrowForward className="text-white text-2xl" />
              </button>
            </div>
          </motion.div>,
          document.body
        )}
    </div>
  );
}
