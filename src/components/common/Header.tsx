'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태
  const navLinks = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 메뉴 열기/닫기 상태 토글
  };

  return (
    <header className="fixed top-0 right-0 z-20 flex items-center p-4 md:px-10 rounded-bl-2xl rounded-br-2xl bg-gray-950 opacity-70 text-white">
      <nav className="flex flex-col md:flex-row w-full">
        {/* PC Nav */}
        <ul className="space-x-10 text-xl hidden md:flex">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                className="hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="flex justify-end md:hidden">
          {isMenuOpen ? (
            <Image
              alt="닫기 버튼"
              src="/icons/xmark-white.svg"
              width={20}
              height={20}
            />
          ) : (
            <Image
              alt="메뉴바"
              src="/icons/bars-white.svg"
              width={20}
              height={20}
            />
          )}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <ul className="flex flex-col mt-4 space-y-4 text-xl md:hidden">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                  className="hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)} // 링크 클릭 시 메뉴 닫기
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
