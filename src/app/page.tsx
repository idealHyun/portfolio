import Introduction from '@/components/aboutme/Introduction'
import Project from '@/components/projects/Project'
import SkillIcon from '@/components/skills/SkillIcon'
import Image from 'next/image'
import Header from '@/components/common/Header'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center'>
      <Header />
      <section id='aboutMe' className='p-4'>
        <Introduction />
      </section>
      <section id='skills' className='flex flex-col'>
        <div id='frontend'>
          <SkillIcon skillName={'html5'} />
        </div>
      </section>
      <section id='projects' className='grid'>
        <Project />
      </section>
      <section id='activity' className='flex flex-col'></section>
      <section id='contact' className='flex flex-col'></section>
    </main>
  )
}
