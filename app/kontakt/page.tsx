'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    setSent(true);
    form.reset();
  }

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Kontakt</h1>
      {sent && <p className="text-lime-500">Poruka poslata!</p>}
      <form onSubmit={submit} className="flex flex-col gap-2 max-w-md">
        <input name="name" placeholder="Ime" className="border p-2" required />
        <input name="email" type="email" placeholder="Email" className="border p-2" required />
        <textarea name="message" placeholder="Poruka" className="border p-2" required />
        <button type="submit" className="bg-lime-500 text-black px-4 py-2 rounded">
          Pošalji
        </button>
      </form>
    </div>
  );
}
