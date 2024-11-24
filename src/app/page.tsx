import Introduction from '@/components/aboutme/Introduction';
import Project from '@/components/projects/Project';
import SkillIcon from '@/components/skills/SkillIcon';
import Image from 'next/image';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      {/* ABOUT */}
      <section id="about" className="p-4 w-full">
        <div className="text-2xl animate-slideInLeft">ABOUT</div>
      </section>
      {/* SKILLS */}
      <section id="skills" className="flex flex-col w-full bg-gray-100">
        <div className="flex justify-center text-2xl font-bold animate-slideInLeft">
          SKILLS
        </div>
        <div className="bg-white m-10 p-4 rounded-2xl">
          <div id="language" className="flex items-center">
            <span className="text-xl font-semibold mr-8">Languages</span>
            <SkillIcon skillName={'javascript'} />
            <SkillIcon skillName={'typescript'} />
            <SkillIcon skillName={'dart'} />
          </div>
          <div id="frontend" className="flex gap-2">
            <span className="text-xl font-bold mr-8">FrontEnd</span>
            <SkillIcon skillName={'react'} />
            <SkillIcon skillName={'next'} />
            <SkillIcon skillName={'tailwindcss'} />
            <SkillIcon skillName={'react-query'} />
            <SkillIcon skillName={'sass'} />
            <SkillIcon skillName={'jest'} />
            <SkillIcon skillName={'antd'} />
            <SkillIcon skillName={'flutter'} />
          </div>
          <div id="backend" className="flex  gap-2">
            <span className="text-xl font-bold mr-8">BackEnd</span>
            <SkillIcon skillName={'nodejs'} />
            <SkillIcon skillName={'mysql'} />
            <SkillIcon skillName={'firebase'} />
            <SkillIcon skillName={'prisma'} />
          </div>
          <div id="devops" className="flex  gap-2">
            <span className="text-xl font-bold mr-8">DevOps</span>
            <SkillIcon skillName={'aws'} />
            <SkillIcon skillName={'netlify'} />
            <SkillIcon skillName={'vercel'} />
          </div>
          <div id="etc" className="flex  gap-2">
            <span className="text-xl font-bold mr-8">Etc</span>
            <SkillIcon skillName={'git'} />
            <SkillIcon skillName={'figma'} />
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section id="projects" className="grid">
        <Project />
      </section>
      <section id="activity" className="flex flex-col"></section>
      <section id="contact" className="flex flex-col"></section>
    </main>
  );
}
