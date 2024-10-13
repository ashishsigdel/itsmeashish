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
  longPhoto: string | undefined;
  coverPhoto: string | undefined;
  previewPics: PicsProps[];
  githubLink?: string | null;
  previewLink?: string | null;
};
