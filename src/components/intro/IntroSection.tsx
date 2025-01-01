import Arrow from '@/components/intro/Arrow';
import Image from 'next/image';

const IntroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-950 z-10">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="w-80 h-80 m-12 rounded-full overflow-hidden">
            <Image
              src="/images/깃허브 프사.jpg"
              alt="Profile"
              width={320}
              height={320}
              className="object-cover w-full h-full z-50"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <span className="text-white text-5xl font-bold text-center z-50">
              {'<'}WEB DEVELOPER PORTFOLIO{' />'}
            </span>
            <span className="text-white text-3xl font-bold text-center z-50">
              Lee Sang Hyun 이상현
            </span>
          </div>
          <Arrow />
        </div>
      </div>
    </>
  );
};

export default IntroSection;
