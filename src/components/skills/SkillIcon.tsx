'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  skillName: string;
};

export default function SkillIcon({ skillName }: Props) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({
      x: event.clientX + 10,
      y: event.clientY + 10,
    });
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove} // 마우스 이동 시 위치 추적
    >
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
      {showTooltip && (
        <div
          className="fixed bg-gray-800 text-white text-sm p-2 rounded-md shadow-lg pointer-events-none z-50"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            zIndex: 9999,
          }}
        >
          {skillName}
        </div>
      )}
    </div>
  );
}
