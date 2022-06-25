import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="w-full p-5 flex justify-center items-center bg-gray-700 border-b border-gray-100">
      <Logo />
    </header>
  );
}
