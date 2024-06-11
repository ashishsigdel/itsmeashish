import Image from "next/image";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
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
    <div className="rounded-ss-md bg-black/25 rounded-ee-md blur-bg border border-primary-border-color mx-auto group cursor-pointer p-5 w-full flex flex-col md:flex-row gap-4 justify-center sm:justify-between items-center mb-5 mt-5 min-h-[300px] z-[99]">
      <div className="flex gap-7 items-center md:max-w-[40vw] group-hover:gap-0 transition-all duration-700">
        <div className="hidden md:inline-block">
          <span className="group-hover:opacity-0 transition-all duration-700">
            0{project.sn}
          </span>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:group-hover:scale-105 transition-all duration-700">
            {project.title}
          </h3>
          <Tags tags={project.tags} />
        </div>
      </div>
      <div className="book w-[225px] h-[300px] md:absolute -top-[2.5rem] right-[10rem] -rotate-6 md:rotate-0 md:group-hover:-rotate-6 md:opacity-0 md:scale-75 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-500">
        <div>
          <Image
            src={project.longImage}
            alt="Product"
            className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-[2000ms] rounded-[10px]"
            layout="fill"
          />
        </div>
        <div className="cover">
          <div className="flex flex-col px-3 h-full justify-between">
            <div></div>
            <div>
              <span className="text-white">0{project.sn}</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <Tags tags={project.tags} />
            </div>
            <span className="text-gray-400 mb-3 font-semibold">
              {project.completeYear}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="flex gap-5 items-center scale-90 md:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700">
          {project.githubLink && (
            <Link href={project.githubLink}>
              <FaGithub className="text-xl cursor-pointer hover:text-primary" />
            </Link>
          )}

          {project.liveLink && (
            <Link href={project.liveLink}>
              <FaGlobe className="text-xl cursor-pointer hover:text-primary" />
            </Link>
          )}
          <Link href={`/project/${project._id}`}>
            <FaInfoCircle className="text-xl cursor-pointer hover:text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
}
