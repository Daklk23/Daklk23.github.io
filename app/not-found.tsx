import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Stranica nije pronađena.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-lime-500 text-black rounded"
      >
        Nazad na početnu
      </Link>
    </div>
  );
}
