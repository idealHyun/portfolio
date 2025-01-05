import Title from '@/components/common/Title';

export default function AboutSection() {
  return (
    <section id="about" className="p-4 pb-20 md:px-1/5 w-full">
      <Title title="ABOUT" />
      <div className="flex flex-col bg-gray-100 gap-4 p-8 rounded-2xl">
        노력하는 사람?
      </div>
    </section>
  );
}
