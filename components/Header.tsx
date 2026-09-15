import Link from 'next/link';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-stone-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10" aria-label="Main navigation">
        <Link href="/" className="font-mono text-sm font-bold uppercase tracking-[0.15em] text-slate-950">
          CC / portfolio
        </Link>
        <ul className="flex gap-6 text-sm font-semibold text-slate-600">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}