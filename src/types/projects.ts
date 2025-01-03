import { StaticImageData } from "next/image";

export type Tags = {
  id: string;
  title: string;
};

export type PicsProps = {
  id: string;
  previewUrl: string;
};

export type projects = {
  id: string;
  title: string;
  description: string;
  tags: Tags[];
  longPhoto: string | StaticImageData;
  coverPhoto: string | StaticImageData;
  previewPics: PicsProps[];
  githubLink?: string | null;
  previewLink?: string | null;
};
