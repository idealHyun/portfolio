import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mdFilePath: string;
};

const MdxModal: React.FC<ModalProps> = ({ isOpen, onClose, mdFilePath }) => {
  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    const loadMdFile = async () => {
      const response = await fetch(mdFilePath);
      const text = await response.text();
      setMdContent(text);
    };

    if (isOpen) {
      loadMdFile();
    }
  }, [mdFilePath, isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // 콘텐츠 클릭 시 닫힘 방지
      >
        <div className="sticky top-0 bg-gray-900 text-white flex justify-between items-center px-4 py-2 rounded-tl-lg rounded-tr-lg">
          <h2 className="text-2xl font-bold">README</h2>
          <button onClick={onClose} className="text-2xl font-bold">
            <Image
              alt={'x button'}
              src={'/icons/xmark-white.svg'}
              width={'20'}
              height={'20'}
            />
          </button>
        </div>
        <div className="markdown-wrapper px-6 py-4 overflow-y-auto">
          <ReactMarkdown>{mdContent}</ReactMarkdown>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MdxModal;
