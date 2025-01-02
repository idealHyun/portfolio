'use client';

import { useRef } from 'react';
import { useIsVisible } from '@/hooks/useIsVisible';

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(titleRef);
  const visibleClass = isVisible ? 'animate-slideInLeft' : '';
  return (
    <div
      ref={titleRef}
      className={`flex justify-center text-3xl md:text-4xl font-bold ${visibleClass} my-8`}
    >
      {title}
    </div>
  );
}
