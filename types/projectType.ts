export type ProjectType = {
  title: string;
  mdFilePath: string;
  subTitle: string;
  functions: string[];
  contributions: string[];
  startDate: string;
  endDate: string;
  category: 'Personal' | 'Team';
  techStacks: string[];
  githubUrl: string | null;
  images: string[] | null;
};
