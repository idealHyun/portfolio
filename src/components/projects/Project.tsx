'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import TechStack from '@/components/projects/TechStack';
import { ProjectType } from '../../../types/projectType';
import MdxModal from '@/components/projects/MdxModal';
import ImageModal from '@/components/projects/ImageModal';

export default function Project({ project }: { project: ProjectType }) {
  const [isMdxModal, setIsMdxModal] = useState<boolean>(false);
  const [isImageModal, setIsImageModal] = useState<boolean>(false);

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

  return (
    <>
      <div
        key={project.title}
        className="flex w-full justify-center items-center border-2 rounded-xl overflow-hidden"
      >
        {/* Project Thumbnail */}
        <Image src={project.thumbNail} alt="Project" width={150} height={200} />
        {/* Project Content */}
        <div className="flex h-full flex-col justify-between items-start px-4 py-2">
          <div>
            <span className="inline-block w-auto rounded-lg bg-blue-400 p-1">
              {project.category}
            </span>
          </div>
          <div className="flex">
            {project.startDate} ~ {project.endDate}
          </div>
          <div>
            <div className="text-2xl">{project.title}</div>
            <div>{project.subTitle}</div>
          </div>

          <div className="flex items-center gap-1 pb-1">
            {project.techStacks.map((techName: string) => (
              <TechStack key={techName} techName={techName} />
            ))}
          </div>

          <div className="flex">
            <button
              className="rounded-lg bg-gray-800 p-1 text-white"
              onClick={readmeClick}
            >
              README
            </button>
            {project.images.length > 0 && (
              <button
                className="rounded-lg bg-gray-800 p-1 text-white"
                onClick={openImageModal}
              >
                Images
              </button>
            )}
            {project.githubUrl && (
              <button
                className="rounded-lg bg-gray-800 p-1 text-white"
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
    </>
  );
}
