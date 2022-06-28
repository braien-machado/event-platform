import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import youtubeBg from '../assets/youtube-bg.png';
import { useCreateSubscriberMutation } from '../graphql/generated';

export default function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col justify-center items-center">
      <img
        src={youtubeBg}
        alt="code mockup"
        className="absolute opacity-50 -z-10 h-[500px]"
      />
      <div className=" w-full max-w-[1100px] flex items-center justify-between mx-auto">
        <div className="max-w-[640px] flex flex-col items-center">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Conheça
            {' '}
            <strong className="text-blue-500">minha playlist completa</strong>
            {' '}
            no
            {' '}
            <strong className="text-blue-500">YouTube</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            A cada dia um novo vídeo da minha seleção de músicas no youtube para você conhecer e adicionar na sua própria.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}

            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-color disabled:opacity-50"
              disabled={loading}
            >
              Quero conhecer a playlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
