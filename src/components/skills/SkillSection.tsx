import Title from '@/components/common/Title';
import Skill from '@/components/skills/Skill';

export default function SkillSection() {
  const languages: string[] = ['javascript', 'typescript', 'dart'];
  const frontendSkills: string[] = [
    'react',
    'next',
    'tailwindcss',
    'react-query',
    'sass',
    'jest',
    'antd',
    'flutter',
  ];
  const backendSkills: string[] = ['nodejs', 'mysql', 'firebase', 'prisma'];
  const devopsSkills: string[] = ['aws', 'netlify', 'vercel'];
  const etcSkills: string[] = ['git', 'figma'];

  return (
    <section
      id="skills"
      className="p-4 pb-20 md:px-1/5 md:pt-4 flex flex-col w-full bg-gray-100"
    >
      <Title title="SKILLS" />

      <div className="flex flex-col gap-4 bg-white p-8 rounded-2xl">
        <Skill skillCategory="Languages" skillNames={languages} />
        <Skill skillCategory="Frontend" skillNames={frontendSkills} />
        <Skill skillCategory="Backend" skillNames={backendSkills} />
        <Skill skillCategory="Devops" skillNames={devopsSkills} />
        <Skill skillCategory="Etc" skillNames={etcSkills} />
      </div>
    </section>
  );
}
