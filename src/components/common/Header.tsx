import React from 'react';

export default function Header() {
  const navLinks = ['ABOUT', 'SKILLS', 'ACTIVITY', 'CONTACT'];

  return (
    <header className="fixed top-0 right-0 z-20 flex items-center p-4 px-10 rounded-bl-2xl rounded-br-2xl bg-gray-950 opacity-70 text-white">
      <nav className={'hidden md:block'}>
        <ul className="flex space-x-10 text-xl">
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
