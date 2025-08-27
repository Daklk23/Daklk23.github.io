import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const endpoint = process.env.FIVEM_SERVER_ENDPOINT!; // TODO: replace
    const res = await fetch(endpoint);
    const data = await res.json();
    const online = data?.Data?.clients ?? 0;
    const max = data?.Data?.sv_maxclients ?? 0;
    return NextResponse.json({ online, max });
  } catch (e) {
    return NextResponse.json({ online: 0, max: 0 });
  }
}
