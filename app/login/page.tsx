'use client';

import { signIn, useSession } from 'next-auth/react';

export default function Login() {
  const { data } = useSession();
  if (data) return <p className="p-8">Već ste prijavljeni.</p>;
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Login</h1>
      <button
        onClick={() => signIn('discord')}
        className="px-4 py-2 bg-lime-500 text-black rounded"
      >
        Nastavi sa Discord-om
      </button>
    </div>
  );
}
