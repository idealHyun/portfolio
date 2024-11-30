import React from 'react';
import Image from 'next/image';

type Props = {
  skillName: string;
};

export default function SkillIcon({ skillName }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        key={skillName}
        className="rounded-sm mx-1"
        src={`/icons/${skillName}.svg`}
        alt={'stack'}
        priority
        quality={100}
        width={30}
        height={30}
        style={{ width: 30, height: 30 }}
      />
    </div>
  );
}
