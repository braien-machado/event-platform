/* eslint-disable import/no-duplicates */
import React from 'react';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'studio';
}

export default function Lesson(props: LessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const {
    title,
    slug,
    availableAt,
    type,
  } = props;

  const isActiveLesson = slug === slugParam;

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={classNames('group', {
        'pointer-events-none': !isLessonAvailable,
      })}
    >
      <span className=" text-gray-300">
        {availableDateFormatted}
      </span>
      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',
          {
            'bg-green-500': isActiveLesson,
          },
        )}
      >
        <header className="flex items-center justify-between">
          { isLessonAvailable ? (
            <span className={classNames('flex items-center text-sm text-blue-500 font-medium gap-2', {
              'text-white': isActiveLesson,
            })}
            >
              <CheckCircle size={20} />
              Música liberada
            </span>
          ) : (
            <span className="flex items-center text-sm text-orange-500 font-medium gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}
          >
            { type === 'live' ? 'AO VIVO' : 'ESTÚDIO' }
          </span>
        </header>
        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}
        >
          { title }
        </strong>
      </div>
    </Link>
  );
}
