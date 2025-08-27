import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const guildId = process.env.DISCORD_GUILD_ID!; // TODO
    const res = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`);
    const data = await res.json();
    return NextResponse.json({ presence_count: data.presence_count });
  } catch (e) {
    return NextResponse.json({ presence_count: 0 });
  }
}
