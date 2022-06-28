import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Video from '../components/Video';

const DEFAULT_SLUG = 'popular-monster';

export default function Event() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMenu={setIsMenuHidden} isMenuHidden={isMenuHidden} />
      <main className="flex flex-1">
        <Video songSlug={slug || DEFAULT_SLUG} />
        <Sidebar isMenuHidden={isMenuHidden} />
      </main>
    </div>
  );
}
