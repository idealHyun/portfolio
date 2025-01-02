import { ProjectType } from '../../types/projectType';
import { soulMBTI } from './soulMBTI';
import { ERP } from './ERP';
import { gukbab } from './gukbab';
import { smileHub } from './smileHub';
import { clickmeee } from './clickmeee';

type ProjectsByYear = {
  [year: string]: ProjectType[];
};

export const projects: ProjectsByYear = {
  '2024': [clickmeee, smileHub, soulMBTI],
  '2023': [ERP, gukbab],
};
