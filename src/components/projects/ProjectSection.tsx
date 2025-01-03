import Title from '@/components/common/Title';
import Project from '@/components/projects/Project';
import { projects } from '../../../data/projects/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="p-4 w-full h-full">
      <Title title="PROJECTS" />
      {Object.entries(projects)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, yearProjects]) => {
          const sortedProjects = yearProjects.sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );

          const leftProjects = sortedProjects.filter(
            (_, index) => index % 2 === 0
          );
          const rightProjects = sortedProjects.filter(
            (_, index) => index % 2 === 1
          );

          return (
            <div key={year}>
              <span className="flex justify-center my-2 text-xl font-bold">
                {year}
              </span>

              {/* 프로젝트 영역 */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] justify-items-center gap-4 lg:gap-8 h-full">
                {/* 왼쪽 프로젝트 */}
                <div className="space-y-8">
                  {leftProjects.map((project) => (
                    <Project key={project.title} project={project} />
                  ))}
                </div>

                {/* 세로 선 */}
                <div className="hidden lg:block w-1 bg-gray-950"></div>

                {/* 오른쪽 프로젝트 */}
                <div className="space-y-8">
                  {rightProjects.map((project) => (
                    <Project key={project.title} project={project} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
