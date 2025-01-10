import { ProjectType } from '@/types/projectType';
import { soulMBTI } from './soulMBTI';
import { ERP } from './ERP';
import { gukbab } from './gukbab';
import { smileHub } from './smileHub';
import { clickmeee } from './clickmeee';
import { portfolio } from './portfolio';
import { gongmoHub } from './GongmoHub';

type ProjectsByYear = {
  [year: string]: ProjectType[];
};

export const projects: ProjectsByYear = {
  '2024': [clickmeee, smileHub, soulMBTI, portfolio, gongmoHub],
  '2023': [ERP, gukbab],
};
