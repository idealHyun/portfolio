import React from 'react';
import Image from 'next/image';

type Props = {
  techName: string;
};

export default function TechStack({ techName }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        key={techName}
        className="rounded-sm mx-1"
        src={`/icons/${techName}.svg`}
        alt={'stack'}
        priority
        quality={100}
        width={15}
        height={15}
        style={{ width: 15, height: 15 }}
      />
    </div>
  );
}
