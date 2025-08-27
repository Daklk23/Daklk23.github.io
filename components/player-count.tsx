'use client';

import { useQuery } from '@tanstack/react-query';

export default function PlayerCount() {
  const { data } = useQuery<{ online: number; max: number }>([
    'players'
  ], async () => {
    const res = await fetch('/api/status/players');
    return res.json();
  }, { refetchInterval: 15000 });

  if (!data) return <p>Učitavanje...</p>;
  return (
    <p className="text-lg">{data.online} / {data.max} igrača online</p>
  );
}
