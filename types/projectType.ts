export type ProjectType = {
  title: string;
  mdFilePath: string;
  subTitle: string;
  startDate: string;
  endDate: string;
  category: 'Personal' | 'Team';
  techStacks: string[];
  githubUrl: string | null;
  images: string[];
  thumbNail: string;
};
