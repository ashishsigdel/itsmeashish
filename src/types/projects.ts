export type projects = {
  id: string;
  sn: number;
  title: string;
  tags: string[];
  image: string;
  github?: string | null;
  website?: string | null;
  completeYear?: string | null;
};
