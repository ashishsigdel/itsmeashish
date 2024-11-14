import Link from "next/link";
import React from "react";

export default function ProjectCard({ project }: any) {
  return (
    <Link key={project.id} href={`/asprog/project/${project.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer">
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <img
            src={project.previewPic}
            alt={project.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
            {project.title}
          </h4>
          <p
            className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>
        </div>
      </div>
    </Link>
  );
}
