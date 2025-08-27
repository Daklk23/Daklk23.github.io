import type { NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // TODO: fetch Discord roles and attach to session
      (session.user as any).roles = token.roles as string[] | undefined;
      return session;
    },
    async jwt({ token }) {
      // TODO: populate token.roles
      return token;
    },
  },
};
