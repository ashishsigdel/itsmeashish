import { StaticImageData } from "next/image";

export type projects = {
  _id: string;
  sn: number;
  title: string;
  description: string;
  tags: string[];
  longImage: string | StaticImageData;
  projectImages: string[];
  githubLink?: string | null;
  liveLink?: string | null;
  completeYear?: string | null;
};
