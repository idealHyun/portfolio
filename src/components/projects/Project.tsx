import React from 'react';
import Image from 'next/image';
import { ProjectType } from '../../../types/projectType';
import { soulMBTI } from '../../../data/projects/soulMBTI';
import TechStack from '@/components/projects/TechStack';

export default function Project() {
  const projects: ProjectType[] = [soulMBTI];

  return (
    <div className="flex justify-center items-center w-full border-2 rounded-xl overflow-hidden">
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
          Team
        </span>
        <span className="text-2xl">SOUL MBTIE</span>
        <span>MBTI와 관심사를 기반으로한 교내 매칭 어플</span>

        <div className="flex gap-1 items-center">
          <TechStack techName="dart" />
          <TechStack techName="flutter" />
          <TechStack techName="firebase" />
        </div>

        <button className="bg-gray-800 rounded-lg p-1 text-white">
          README
        </button>
      </div>
    </div>
  );
}
