import React from 'react';
import Image from 'next/image';
import TechStack from '@/components/projects/TechStack';
import { ProjectType } from '../../../types/projectType';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div
      key={project.title} // 각 요소에 고유 key 필요
      className="flex justify-center items-center w-full border-2 rounded-xl overflow-hidden"
    >
      {/* Project Thumbnail */}
      <Image
        src="/images/about/취업사진2.jpg"
        alt="Project"
        width={150}
        height={200}
      />
      {/* Project Content */}
      <div className="p-4 flex flex-col items-start h-full">
        <span className="inline-block bg-blue-400 rounded-lg p-1 w-auto">
          {project.category}
        </span>
        <span className="text-2xl">{project.title}</span>
        <span>{project.subTitle}</span>

        <div className="flex gap-1 items-center">
          {project.techStacks.map((techName: string) => (
            <TechStack key={techName} techName={techName} />
          ))}
        </div>

        <button className="bg-gray-800 rounded-lg p-1 text-white">
          README
        </button>
      </div>
    </div>
  );
}
