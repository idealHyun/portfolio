'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TechStack from '@/components/projects/TechStack';
import { ProjectType } from '../../../types/projectType';
import MdxModal from '@/components/projects/MdxModal';
import ImageModal from '@/components/projects/ImageModal';
import { useIsVisible } from '@/hooks/useIsVisible';

export default function Project({ project }: { project: ProjectType }) {
  const [isMdxModal, setIsMdxModal] = useState<boolean>(false);
  const [isImageModal, setIsImageModal] = useState<boolean>(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(projectRef);
  const visibleClass = isVisible ? 'animate-fadeIn' : '';

  const readmeClick = () => {
    setIsMdxModal(true);
  };

  const handleClose = () => {
    setIsMdxModal(false);
  };

  const openImageModal = () => {
    setIsImageModal(true);
  };

  const closeImageModal = () => {
    setIsImageModal(false);
  };

  useEffect(() => {
    if (isMdxModal || isImageModal) {
      document.body.style.overflow = 'hidden'; // 모달 열렸을 때 스크롤 방지
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫혔을 때 스크롤 허용
    }
  }, [isMdxModal, isImageModal]);

  return (
    <div ref={projectRef} className={`${visibleClass} p-16`}>
      <div
        key={project.title}
        className="flex flex-col w-full justify-center items-start border-2 rounded-xl overflow-hidden"
      >
        {/* Project Thumbnail */}
        <Image
          src={project.thumbNail}
          alt="Project"
          layout="responsive"
          width={3}
          height={2}
        />
        {/* Project Content */}
        <div className="flex h-full flex-col gap-2 justify-start items-start px-4 py-2">
          <div>
            <span className="inline-block w-auto rounded-lg bg-blue-400 p-1">
              {project.category}
            </span>
          </div>
          <div className="flex">
            {project.startDate} ~ {project.endDate}
          </div>
          <div>
            <div className="text-2xl font-bold">{project.title}</div>
            <span className="font-bold">{project.subTitle}</span>
          </div>

          <div className="flex items-center gap-1 pb-1">
            {project.techStacks.map((techName: string) => (
              <TechStack key={techName} techName={techName} />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              className="rounded-lg bg-gray-800 py-1 px-2 text-white"
              onClick={readmeClick}
            >
              README
            </button>
            {project.images.length > 0 && (
              <button
                className="rounded-lg bg-gray-800 py-1 px-2 text-white"
                onClick={openImageModal}
              >
                Images
              </button>
            )}
            {project.githubUrl && (
              <button
                className="rounded-lg bg-gray-800 py-1 px-2 text-white"
                onClick={() => window.open(project.githubUrl!, '_blank')}
              >
                Github
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal Component for MD */}
      {isMdxModal && (
        <MdxModal
          isOpen={isMdxModal}
          onClose={handleClose}
          mdFilePath={project.mdFilePath}
        ></MdxModal>
      )}

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModal}
        onClose={closeImageModal}
        images={project.images}
      />
    </div>
  );
}
