import Title from '@/components/common/Title';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="p-4 pb-20 md:px-1/5 md:pt-4 flex flex-col w-full bg-gray-100"
    >
      <Title title="CONTACT" />
      <div className="flex justify-center items-center gap-4 bg-white p-8 rounded-2xl">
        <Image alt={'이메일'} src={'/icons/email.svg'} width={20} height={20} />
        <span>lsh991021@gmail.com</span>
      </div>
    </section>
  );
}
