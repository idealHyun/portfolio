'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative p-4 bg-white rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600"
        >
          &times;
        </button>

        <div className="flex justify-center items-center">
          {/* Left button */}
          <button
            onClick={goToPreviousImage}
            className={`absolute left-2 text-2xl text-gray-800 ${
              currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentImageIndex === 0}
          >
            &lt;
          </button>

          {/* Image */}
          <Image
            src={images[currentImageIndex]}
            alt={`Project Image ${currentImageIndex + 1}`}
            width={800}
            height={800}
            className="max-w-full max-h-[80vh]"
          />

          {/* Right button */}
          <button
            onClick={goToNextImage}
            className={`absolute right-2 text-2xl text-gray-800 ${
              currentImageIndex === images.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            disabled={currentImageIndex === images.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
