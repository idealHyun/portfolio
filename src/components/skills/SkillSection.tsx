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

      <div className="flex flex-col gap-4 bg-white m-10 p-4 rounded-2xl">
        {/* Languages */}
        <div id="language" className="flex gap-2">
          <span className="text-xl font-semibold flex-[1]">Languages</span>
          <div className="flex flex-wrap gap-2 flex-[3]">
            {languages.map((language: string) => (
              <SkillIcon key={language} skillName={language} />
            ))}
          </div>
        </div>
        {/* FrontEnd */}
        <div id="frontend" className="flex gap-2">
          <span className="text-xl font-bold flex-[1]">FrontEnd</span>
          <div className="flex flex-wrap gap-2 flex-[3]">
            {frontendSkills.map((skill: string) => (
              <SkillIcon key={skill} skillName={skill} />
            ))}
          </div>
        </div>
        {/* BackEnd */}
        <div id="backend" className="flex gap-2">
          <span className="text-xl font-bold flex-[1]">BackEnd</span>
          <div className="flex flex-wrap gap-2 flex-[3]">
            {backendSkills.map((skill: string) => (
              <SkillIcon key={skill} skillName={skill} />
            ))}
          </div>
        </div>
        {/* DevOps */}
        <div id="devops" className="flex gap-2">
          <span className="text-xl font-bold flex-[1]">DevOps</span>
          <div className="flex flex-wrap gap-2 flex-[3]">
            {devopsSkills.map((skill: string) => (
              <SkillIcon key={skill} skillName={skill} />
            ))}
          </div>
        </div>
        {/* Etc */}
        <div id="etc" className="flex gap-2">
          <span className="text-xl font-bold flex-[1]">Etc</span>
          <div className="flex flex-wrap gap-2 flex-[3]">
            {etcSkills.map((skill: string) => (
              <SkillIcon key={skill} skillName={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
