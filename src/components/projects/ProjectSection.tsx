import Title from '@/components/common/Title';
import Project from '@/components/projects/Project';
import { projects } from '../../../data/projects/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="p-4 w-full h-full">
      <Title title="PROJECTS" />
      <span className="flex justify-center mb-2">2024</span>

      {/* 프로젝트 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-8 p-4 h-full">
        {/* 왼쪽 프로젝트 */}
        <div className="space-y-8">
          {projects
            .filter((_, index) => index % 2 === 0) // 짝수 인덱스 (왼쪽)
            .map((project) => (
              <Project key={project.title} project={project} />
            ))}
        </div>

        {/* 세로 선 */}
        <div className="hidden lg:block w-1 bg-gray-950"></div>

        {/* 오른쪽 프로젝트 */}
        <div className="lg:mt-20 space-y-8">
          {projects
            .filter((_, index) => index % 2 === 1) // 홀수 인덱스 (오른쪽)
            .map((project) => (
              <Project key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
