import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mdFilePath: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  mdFilePath,
}: ModalProps) => {
  const [mdContent, setMdContent] = useState('');

  useEffect(() => {
    const loadMdFile = async () => {
      const response = await fetch(`${mdFilePath}`);
      const text = await response.text();
      setMdContent(text);
    };

    loadMdFile().then((r) => console.log('Markdown file loaded'));
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 모달 열렸을 때 스크롤 방지
    } else {
      document.body.style.overflow = 'auto'; // 모달 닫혔을 때 스크롤 허용
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // 콘텐츠 클릭 시 닫힘 방지
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 text-gray-700 rounded-full w-8 h-8 font-bold flex items-center justify-center hover:bg-gray-300"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="markdown-wrapper">
          <ReactMarkdown>{mdContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Modal;
