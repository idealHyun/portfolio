import React from 'react';
import Image from 'next/image';
import TechStack from '@/components/projects/TechStack';
import { ProjectType } from '../../../types/projectType';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div
      key={project.title}
      className="flex w-full justify-center items-center border-2 rounded-xl overflow-hidden"
    >
      {/* Project Thumbnail */}
      <Image
        src="/images/about/취업사진2.jpg"
        alt="Project"
        width={150}
        height={200}
      />
      {/* Project Content */}
      <div className="flex h-full flex-col justify-between items-start px-4 py-2">
        <div>
          <span className="inline-block w-auto rounded-lg bg-blue-400 p-1">
            {project.category}
          </span>
        </div>
        <div className="flex">
          {project.startDate} ~ {project.endDate}
        </div>
        <div>
          <div className="text-2xl">{project.title}</div>
          <div>{project.subTitle}</div>
        </div>

        <div className="flex items-center gap-1 pb-1">
          {project.techStacks.map((techName: string) => (
            <TechStack key={techName} techName={techName} />
          ))}
        </div>

        <button className="rounded-lg bg-gray-800 p-1 text-white">
          README
        </button>
      </div>
    </div>
  );
}
