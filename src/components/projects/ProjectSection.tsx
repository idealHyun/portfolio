import Title from '@/components/common/Title';
import Project from '@/components/projects/Project';
import { projects } from '../../../data/projects/projects';

export default function ProjectSection() {
  return (
    <section id="projects" className="grid">
      <Title title="PROJECTS" />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2  mb-14">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
