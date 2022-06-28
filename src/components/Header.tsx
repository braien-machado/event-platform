import { List } from 'phosphor-react';
import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  toggleMenu: (bool: boolean) => void;
  isMenuHidden: boolean;
}

export default function Header(props: HeaderProps) {
  const { toggleMenu, isMenuHidden } = props;

  return (
    <header
      className="w-full py-5 px-8 flex justify-between lg:justify-center items-center bg-gray-700 border-b border-gray-100"
    >
      <Logo />
      <button
        onClick={() => toggleMenu(!isMenuHidden)}
        type="button"
        className="flex items-center lg:hidden gap-2"
      >
        <h1 className="text-xl">Músicas</h1>
        <List size={40} className="text-blue-500" />
      </button>
    </header>
  );
}
