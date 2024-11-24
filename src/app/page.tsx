import Introduction from '@/components/aboutme/Introduction';
import Project from '@/components/projects/Project';
import Image from 'next/image';
import Header from '@/components/common/Header';
import SkillSection from '@/components/skills/SkillSection';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      {/* ABOUT */}
      <section id="about" className="p-4 w-full">
        <div className="text-2xl m-96 animate-slideInLeft">ABOUT</div>
      </section>
      {/* SKILLS */}
      <SkillSection />
      {/* PROJECTS */}
      <section id="projects" className="grid">
        <Project />
      </section>
      <section id="activity" className="flex flex-col"></section>
      <section id="contact" className="flex flex-col"></section>
    </main>
  );
}
