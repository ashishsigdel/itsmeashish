export type Point = {
  id: number;
  title: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  points: Point[];
};
