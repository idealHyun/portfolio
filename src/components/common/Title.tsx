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
      className={`flex justify-center text-2xl font-bold ${visibleClass}`}
    >
      {title}
    </div>
  );
}
