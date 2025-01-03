import Image from 'next/image';

const Arrow = () => {
  return (
    <div className="flex items-center justify-center bg-gray-950 mt-10">
      <div className="bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-contain bg-no-repeat animate-bounce">
        <Image
          alt="화살표"
          src="/icons/down-arrow.svg"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Arrow;
