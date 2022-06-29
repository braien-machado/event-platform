import classNames from 'classnames';
import React from 'react';
import { useGetSongsQuery } from '../graphql/generated';
import Song from './Song';

interface SidebarProps {
  isMenuHidden: boolean;
}

export default function Sidebar(props: SidebarProps) {
  const { data } = useGetSongsQuery();
  const { isMenuHidden } = props;

  return (
    <aside
      className={classNames('absolute z-50 lg:static lg:block lg:w-[348px] bg-gray-700 p-6 border-gray-600 transition-all', {
        '-left-[348px]': isMenuHidden,
        'left-0': !isMenuHidden,
        'w-[348px]': isMenuHidden,
        'w-full': !isMenuHidden,
      })}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de músicas
      </span>
      <div className="flex flex-col gap-8">
        { data?.songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            slug={song.slug}
            availableAt={new Date(song.availableAt)}
            version={song.songVersion}
          />
        )) }
      </div>
    </aside>
  );
}
