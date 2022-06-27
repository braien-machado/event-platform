import React from 'react';
import { useGetSongsQuery } from '../graphql/generated';
import Lesson from './Lesson';

export default function Sidebar() {
  const { data } = useGetSongsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        { data?.songs.map((song) => (
          <Lesson
            key={song.id}
            title={song.title}
            slug={song.slug}
            availableAt={new Date(song.availableAt)}
            type={song.songVersion}
          />
        )) }
      </div>
    </aside>
  );
}
