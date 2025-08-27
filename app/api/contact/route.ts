import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: validate with Zod and maybe store in DB
  console.log('Contact message', data);
  return NextResponse.json({ ok: true });
}
