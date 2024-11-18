import React from 'react';
import Image from 'next/image';

type Props = {
  skillName: string;
};

export default function SkillIcon({ skillName }: Props) {
  return (
    <Image
      key={'html5'}
      className='rounded-sm mx-1'
      src={`/icons/${skillName}.svg`}
      alt={'stack'}
      priority
      quality={100}
      width={50}
      height={50}
      style={{ width: 50, height: 50 }}
    />
  );
}
