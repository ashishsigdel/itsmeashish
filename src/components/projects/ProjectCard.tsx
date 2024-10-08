import Image from "next/image";
import { FaGithub, FaGlobe, FaInfo, FaInfoCircle } from "react-icons/fa";
import "@/styles/projectCard.scss";
import { projects, Tags } from "@/types/projects";
import Link from "next/link";

export default function ProjectCard({ project }: { project: projects }) {
  return (
    <div className="rounded-ss-lg bg-black/25 rounded-ee-lg blur-bg border border-primary-border-color cursor-pointer w-full sm:w-[450px] flex flex-col mb-5">
      <Image
        src={project.longPhoto}
        alt="project"
        className="h-[270px] object-top object-cover hover:object-bottom transition-all duration-[3000ms] rounded-ss-md"
        width={300}
        height={1000}
      />
      <div className="p-3">
        <h3 className="text-[22px] font-semibold text-center my-5">
          {project.title}
        </h3>
        <p className="text-12px text-center mb-5">{project.description}</p>
        <div className="flex max-w-[95%] flex-wrap justify-center mb-2">
          {project.tags.map((tag: Tags) => (
            <span
              key={tag.id}
              className="bg-primary-border-color/25 blur-bg text-white rounded-full px-2 py-1 mr-2 mb-2 text-sm"
            >
              {tag.title}
            </span>
          ))}
        </div>
        <div className="flex mt-2 justify-center gap-2">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-1/2 justify-center hover:bg-gray-700 py-3 rounded-md border border-gray-700"
            >
              <FaGithub className="text-white hover:text-primary-color transition" />
              <p>Github</p>
            </a>
          )}
          {project.previewLink && (
            <a
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-1/2 justify-center hover:bg-gray-700 py-3 rounded-md border border-gray-700"
            >
              <FaGlobe className="text-white hover:text-primary-color transition" />
              <p>Check Live</p>
            </a>
          )}

          <Link
            href={`/project/${project.id}`}
            // target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center w-1/2 justify-center hover:bg-gray-700 py-3 rounded-md border border-gray-700 "
          >
            <FaInfo className="text-white hover:text-primary-color transition" />
            <p>More info</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
