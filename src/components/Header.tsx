import { List, X } from 'phosphor-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  // eslint-disable-next-line no-unused-vars
  setIsMenuHidden: (bool: boolean) => void;
  isMenuHidden: boolean;
}

export default function Header(props: HeaderProps) {
  const { setIsMenuHidden, isMenuHidden } = props;
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    setIsMenuHidden(!isMenuHidden);
  }, [slug]);

  return (
    <header
      className="w-full py-5 px-8 flex justify-between lg:justify-center items-center bg-gray-700 border-b border-gray-100"
    >
      <Logo />
      <button
        onClick={() => setIsMenuHidden(!isMenuHidden)}
        type="button"
        className="flex items-center lg:hidden gap-2"
      >
        <h1 className="text-xl hidden sm:block">Músicas</h1>
        { isMenuHidden ? (
          <List size={40} className="text-blue-500" />
        ) : (
          <X size={40} className="text-blue-500" />
        )}
      </button>
    </header>
  );
}
