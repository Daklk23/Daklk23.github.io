import ThemeToggle from './theme-toggle';

export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm flex items-center justify-between">
      <p>© {new Date().getFullYear()} Vantage Roleplay</p>
      <ThemeToggle />
    </footer>
  );
}
