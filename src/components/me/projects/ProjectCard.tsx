import React, { memo } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "@/styles/projectCard.scss";
import { projects, Tags } from "@/types/projects";
import Link from "next/link";

const Tag = memo(({ tag }: { tag: Tags }) => (
  <span className="bg-gray-200 dark:bg-gray-800 blur-bg text-hard-dark/70 dark:text-light/90 rounded-full px-2 py-1 mr-2 mb-2 text-sm">
    {tag.title}
  </span>
));
Tag.displayName = "Tag";

function ProjectCard({ project }: { project: projects }) {
  return (
    <Link
      href={`/me/project/${project.id}`}
      className="rounded-ss-lg bg-white dark:bg-black rounded-ee-lg blur-bg border border-black/15 dark:border-white/15 cursor-pointer flex flex-col mb-5 max-w-[30rem] sm:max-w-[26rem] mx-auto"
      rel="noopener noreferrer"
    >
      <div className="h-full w-full">
        <Image
          src={project.longPhoto}
          alt="project"
          className="h-[270px] w-full object-top object-cover hover:object-bottom transition-all duration-[3000ms] rounded-ss-md border-b border-black/15 dark:border-white/15"
          width={270}
          height={500}
        />
        <div className="p-3">
          <h3 className="text-[22px] text-primary-blue font-semibold text-center my-5">
            {project.title}
          </h3>
          <p className="text-12px text-hard-dark/80 dark:text-light/80 text-center mb-5 line-clamp-5">
            {project.description}
          </p>
          <div className="flex max-w-[95%] flex-wrap justify-center mb-2">
            {project.tags.map((tag: Tags) => (
              <Tag key={tag.id} tag={tag} />
            ))}
          </div>
          <div
            className="flex flex-wrap mt-2 justify-center gap-4"
            onClick={(e) => e.stopPropagation()} // Prevent the click event from bubbling to the outer Link
          >
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center dark:bg-gray-800 bg-gray-200 text-gray-800 dark:text-white py-3 px-4 rounded-md border border-gray-300 dark:border-gray-700"
              >
                <FaGithub className="hover:text-primary-color transition" />
                <p>Github</p>
              </a>
            )}
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center bg-primary-blue text-white py-3 px-4 rounded-md border border-gray-700"
              >
                <FaGlobe className="text-white hover:text-primary-color transition" />
                <p>Check Live</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
