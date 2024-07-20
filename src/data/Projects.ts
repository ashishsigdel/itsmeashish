import { projects } from "@/types/projects";
import projectImageLong from "@/assets/projects/grocery.png";

export const projectsData: projects[] = [
  {
    _id: "1",
    sn: 1,
    title: "Ecommerce Website",
    description:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    tags: ["React", "nodejs", "mongodb", "express"],
    longImage: projectImageLong,
    projectImages: [],
    githubLink: "https://github.com/ashishsigdel/E-commerce-website-client",
    liveLink: "https://github.com/ashishsigdel/E-commerce-website-client",
    completeYear: "2023",
  },
];
