import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../lib/auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  const roles = (session?.user as any)?.roles as string[] | undefined;
  if (!roles?.includes(process.env.ROLE_ADMIN ?? 'Admin')) {
    redirect('/');
  }
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Admin panel</h1>
      <p>Dobrodošli, {session?.user?.name}</p>
    </div>
  );
}
