import SkillIcon from '@/components/skills/SkillIcon';

type skillProps = {
  skillCategory: string;
  skillNames: string[];
};

export default function Skill({ skillCategory, skillNames }: skillProps) {
  return (
    <div id={`${skillCategory}`} className="flex flex-col md:flex-row gap-2">
      <span className="text-lg font-bold flex-[1]">{skillCategory}</span>
      <div className="flex flex-wrap gap-2 flex-[4]">
        {skillNames.map((language: string) => (
          <SkillIcon key={language} skillName={language} />
        ))}
      </div>
    </div>
  );
}
