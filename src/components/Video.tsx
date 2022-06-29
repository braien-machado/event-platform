import {
  Article,
  CaretRight,
  MusicNote,
  Plus,
} from 'phosphor-react';
import React from 'react';
import '@vime/core/themes/default.css';
import { useGetSongBySlugQuery } from '../graphql/generated';

interface VideoProps {
  songSlug: string;
}

export default function Video(props: VideoProps) {
  const { songSlug } = props;
  const { data } = useGetSongBySlugQuery({
    variables: {
      slug: songSlug,
    },
  });

  if (!data || !data.song) {
    return (
      <div className="flex-1">
        Carregando...
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div
          className="relative h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"
        >
          <iframe
            className="absolute z-10 top-0 left-0 right-0 bottom-0 w-full h-full border-none"
            src={`https://www.youtube.com/embed/${data.song.videoId}`}
            title={data.song.title}
          />
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.song.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.song.description}
            </p>
            { data.song.author && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.song.author.avatarURL}
                  alt="author avatar or logo"
                />
                <div>
                  <strong className="font-bold text-2xl block">
                    {data.song.author.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.song.author.bio}
                  </span>
                </div>
              </div>
            ) }
          </div>
          <div className="flex flex-row w-full sm:w-fit justify-center sm:flex-start sm:flex-col gap-4">
            {
              data.song.lyrics && (
                <a
                  className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                  href={data.song.lyrics}
                  target="blank"
                >
                  <Article size={24} />
                  Veja a letra
                </a>
              )
            }
            {
              data.song.chords && (
                <a
                  className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
                  href={data.song.chords}
                  target="blank"
                >
                  <MusicNote size={24} />
                  Aprenda a tocá-la
                </a>
              )
            }
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
          <a
            className="bg-gray-700 rounded overflow-hidden flex justify-between items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="https://www.youtube.com/results?search_query=playlist"
            target="blank"
          >
            <div className="flex gap-6">
              <div className="bg-green-700 h-full p-6- flex items-center">
                <Plus size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Mais playlists
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Encontre novas playlists pra curtir seus momentos
                </p>
              </div>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            className="bg-gray-700 rounded overflow-hidden flex justify-between items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="https://music.youtube.com/"
            target="blank"
          >
            <div className="flex gap-6">
              <div className="bg-green-700 h-full p-6- flex items-center">
                <Plus size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Sua própria playlist
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Crie sua playlist com cantores, bandas e músicas de sua preferência
                </p>
              </div>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
