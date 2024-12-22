import Header from '@/components/common/Header';
import SkillSection from '@/components/skills/SkillSection';
import AboutSection from '@/components/about/AboutSection';
import ProjectSection from '@/components/projects/ProjectSection';
import IntroSection from '@/components/intro/IntroSection';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      <IntroSection />
      {/* ABOUT */}
      <AboutSection />
      {/* SKILLS */}
      <SkillSection />
      {/* PROJECTS */}
      <ProjectSection />
      <section id="activity" className="flex flex-col"></section>
      <section id="contact" className="flex flex-col"></section>
    </main>
  );
}
