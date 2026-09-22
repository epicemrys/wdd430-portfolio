import Link from 'next/link';

const tabs = [
  { href: '/projects', label: 'Overview' },
  { href: '/projects/opensource', label: 'Open Source' },
  { href: '/projects/school', label: 'School' },
];

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 lg:py-24">
      <nav className="mb-10 flex gap-6 border-b border-slate-200 pb-4 text-sm font-semibold text-slate-600">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href} className="hover:text-amber-700">
            {tab.label}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}