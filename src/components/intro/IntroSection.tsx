const IntroSection = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-900">
        {/* 스플래시 화면 (로고나 로딩 이미지) */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <span className="text-white text-3xl font-bold">
            WEB DEVELOPER PORTFOLIO
          </span>
          <span className="text-white text-2xl font-bold">
            Lee Sang Hyun 이상현
          </span>
        </div>
      </div>
    </>
  );
};

export default IntroSection;
