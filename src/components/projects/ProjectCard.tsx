import Image from "next/image";
import { FaGithub, FaGlobe, FaInfo, FaInfoCircle } from "react-icons/fa";
import "@/styles/projectCard.scss";
import { projects } from "@/types/projects";
import Link from "next/link";

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap mt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-primary-border-color/25 blur-bg text-white rounded-full px-2 py-1 mr-2 mb-2 text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default function ProjectCard({ project }: { project: projects }) {
  return (
    <div className="rounded-ss-lg bg-black/25 rounded-ee-lg blur-bg border border-primary-border-color cursor-pointer w-full sm:w-[500px] flex flex-col mb-5">
      <Image
        src={project.longImage}
        alt="project"
        className="h-[270px] object-top object-cover hover:object-bottom transition-all duration-[3000ms] rounded-ss-md"
        width={1000}
        height={5000}
      />
      <div className="p-3">
        <h3 className="text-[22px] font-semibold line-clamp-1">
          {project.title}
        </h3>
        <p
          className="line-clamp-3 text-12px"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        <Tags tags={project.tags} />
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
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center w-1/2 justify-center hover:bg-gray-700 py-3 rounded-md border border-gray-700"
            >
              <FaGlobe className="text-white hover:text-primary-color transition" />
              <p>Check Live</p>
            </a>
          )}

          <Link
            href={`/project/${project._id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center w-1/2 justify-center hover:bg-gray-700 py-3 rounded-md border border-gray-700"
          >
            <FaInfo className="text-white hover:text-primary-color transition" />
            <p>More info</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
