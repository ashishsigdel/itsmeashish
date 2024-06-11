export type projects = {
  _id: string;
  sn: number;
  title: string;
  tags: string[];
  longImage: string;
  projectImages: string[];
  githubLink?: string | null;
  liveLink?: string | null;
  completeYear?: string | null;
};
