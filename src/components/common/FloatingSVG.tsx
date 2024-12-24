'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Utility to generate random values
const getRandomValue = (min, max) => Math.random() * (max - min) + min;

// Array of SVG file names in the public folder
const svgFiles = [
  'react',
  'flutter',
  'mysql',
  'typescript',
  'sass',
  'next',
  'jest',
  'tailwindcss',
  'nodejs',
  'react-query',
];

const FloatingSVG = () => {
  const [randomStart, setRandomStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random start positions
    setRandomStart({
      x: getRandomValue(-400, 400), // Wider range for X start position
      y: getRandomValue(-400, 400), // Wider range for Y start position
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Render multiple SVGs */}
      {Array.from({ length: 10 }).map((_, index) => {
        const randomDuration = getRandomValue(10, 50); // Longer animation durations
        const randomSize = getRandomValue(50, 150); // Larger sizes for SVGs
        const randomOpacity = getRandomValue(0.2, 0.7); // Lower opacity for more transparency

        return (
          <motion.img
            key={index}
            src={`/icons/${svgFiles[index % svgFiles.length]}.svg`}
            alt={`Floating SVG ${index}`}
            className="absolute"
            style={{
              width: randomSize,
              height: randomSize,
              top: `${getRandomValue(0, 120)}%`, // Expanded vertical range
              left: `${getRandomValue(0, 120)}%`, // Expanded horizontal range
              opacity: randomOpacity, // Set random opacity
            }}
            animate={{
              x: getRandomValue(-500, 500), // Wider range for X movement
              y: getRandomValue(-500, 500), // Wider range for Y movement
            }}
            transition={{
              duration: randomDuration, // Longer animation durations
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingSVG;
