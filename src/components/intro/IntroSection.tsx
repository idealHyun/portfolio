import Arrow from '@/components/common/Arrow';

const IntroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-900">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="w-80 h-80 m-12 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150" // 원하는 이미지 URL로 변경
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <span className="text-white text-5xl font-bold text-center">
              WEB DEVELOPER PORTFOLIO
            </span>
            <span className="text-white text-3xl font-bold text-center">
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
