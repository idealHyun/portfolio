import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mdFilePath: string;
};

const MdxModal: React.FC<ModalProps> = ({
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div
        className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 max-h-[80vh] overflow-y-auto scrollbar-hide flex flex-col"
        onClick={(e) => e.stopPropagation()} // 콘텐츠 클릭 시 닫힘 방지
      >
        <div className="sticky top-0 left-0 right-0 bg-gray-900 flex items-center justify-between">
          <span className="pl-6 text-white font-bold text-2xl py-2">
            README
          </span>
          <button
            className="pr-6 text-white rounded-full font-bold flex items-center justify-center hover:gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {/* 닫기 버튼 */}

        <div className="markdown-wrapper px-6 pb-6">
          <ReactMarkdown>{mdContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MdxModal;
