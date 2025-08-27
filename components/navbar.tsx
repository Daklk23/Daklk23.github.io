import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import Logo from './logo';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 bg-background z-50 border-b">
      <Logo />
      <div className="flex items-center gap-4">
        <Link href="/o-nama" className="hover:underline">
          O nama
        </Link>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
