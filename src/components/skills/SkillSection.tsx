import SkillIcon from '@/components/skills/SkillIcon';
import Title from '@/components/common/Title';

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
    <section id="skills" className="flex flex-col w-full bg-gray-100">
      <Title title="SKILLS" />
      <div className="bg-white m-10 p-4 rounded-2xl">
        <div id="language" className="flex items-center">
          <span className="text-xl font-semibold mr-8">Languages</span>
          {languages.map((language: string) => (
            <SkillIcon key={language} skillName={language} />
          ))}
        </div>
        <div id="frontend" className="flex gap-2">
          <span className="text-xl font-bold mr-8">FrontEnd</span>
          {frontendSkills.map((skill: string) => (
            <SkillIcon key={skill} skillName={skill} />
          ))}
        </div>
        <div id="backend" className="flex  gap-2">
          <span className="text-xl font-bold mr-8">BackEnd</span>
          {backendSkills.map((skill: string) => (
            <SkillIcon key={skill} skillName={skill} />
          ))}
        </div>
        <div id="devops" className="flex  gap-2">
          <span className="text-xl font-bold mr-8">DevOps</span>
          {devopsSkills.map((skill: string) => (
            <SkillIcon key={skill} skillName={skill} />
          ))}
        </div>
        <div id="etc" className="flex  gap-2">
          <span className="text-xl font-bold mr-8">Etc</span>
          {etcSkills.map((skill: string) => (
            <SkillIcon key={skill} skillName={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
