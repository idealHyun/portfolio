export type ProjectType = {
  title: string;
  subTitle: string;
  description: string;
  functions: string[];
  contributions: string[];
  startDate: string;
  endDate: string;
  category: 'Personal' | 'Team';
  techStacks: string[];
  githubUrl: string | null;
  images: string[] | null;
};
