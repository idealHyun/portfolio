import React from 'react';

type Props = {};

export default function Header({}: Props) {
  const navLinks = ['ABOUT ME', 'SKILLS', 'ACTIVITY', 'CONTACT'];

  return (
    <div>
      <span>idealHyun</span>
      <nav>
        <ul>{/*{navLinks.map(link => ())}*/}</ul>
      </nav>
    </div>
  );
}
