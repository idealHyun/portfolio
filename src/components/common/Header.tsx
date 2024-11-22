import React from 'react';

type Props = {};

export default function Header({}: Props) {
  const navLinks = ['ABOUT', 'SKILLS', 'ACTIVITY', 'CONTACT'];

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white w-full">
      <span className="text-xl font-bold">idealHyun</span>
      <nav>
        <ul className="flex space-x-4">
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
      </nav>
    </header>
  );
}
