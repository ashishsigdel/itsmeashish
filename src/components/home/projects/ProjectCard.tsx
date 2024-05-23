import product from "@/assets/projects/grocery.png";
import Image from "next/image";
import { FaGithub, FaGlobe, FaInfoCircle } from "react-icons/fa";
import "@/styles/projectCard.scss";
import { Button } from "@/components/common";

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

const ProjectCard: React.FC = () => {
  const tags: string[] = ["React", "Next.js", "TailwindCSS", "Ecommerce"];

  return (
    <div className="rounded-ss-md rounded-ee-md blur-bg border border-primary-border-color mx-auto group cursor-pointer p-5 w-full sm:w-[350px] flex flex-col justify-center items-center">
      <div className="book sm:w-[315px] h-[425px]">
        <div className="">
          <Image
            src={product}
            alt="Product"
            className="w-full h-full object-cover object-top group-hover:object-bottom transition-all duration-[2000ms] rounded-[10px] "
            layout="fill"
          />
        </div>
        <div className="cover">
          <div className="flex flex-col px-3 h-full justify-between">
            <div></div>
            <div>
              <span className="text-white">01</span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                Ecommerce Website
              </h3>
              <div className="">
                <Tags tags={tags} />
              </div>
            </div>
            <span className="text-gray-400 mb-3 font-semibold ">2023</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="flex gap-5 items-center">
          <FaGithub className="text-xl cursor-pointer hover:text-primary" />
          <FaGlobe className="text-xl cursor-pointer hover:text-primary" />
          <FaInfoCircle className="text-xl cursor-pointer hover:text-primary" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
