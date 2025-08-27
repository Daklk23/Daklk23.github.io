'use client';

import { useEffect, useState } from 'react';

type DiscordInfo = {
  presence_count: number;
};

export default function DiscordWidget() {
  const [info, setInfo] = useState<DiscordInfo | null>(null);

  useEffect(() => {
    fetch('/api/discord/widget')
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => setInfo(null));
  }, []);

  return (
    <div className="p-4 border rounded-md">
      <p className="font-bold mb-2">Discord</p>
      {info ? <p>{info.presence_count} članova online</p> : <p>Učitavanje...</p>}
      <a
        href="https://discord.gg/placeholder"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lime-500 underline"
      >
        Pridruži se Discordu
      </a>
    </div>
  );
}
