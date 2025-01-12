import Header from '@/components/common/Header';
import SkillSection from '@/components/skills/SkillSection';
import AboutSection from '@/components/about/AboutSection';
import ProjectSection from '@/components/projects/ProjectSection';
import IntroSection from '@/components/intro/IntroSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <Header />
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
