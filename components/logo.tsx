import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* TODO: Insert logo image */}
      {/* Example: <img src="/logo.png" alt="Vantage Logo" width={32} height={32} /> */}
      <span className="font-bold">Vantage</span>
    </Link>
  );
}
