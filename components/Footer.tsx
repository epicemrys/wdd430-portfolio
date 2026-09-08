export default function Footer() {  
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>Charles Ukoh</p>
        <p>&copy; {new Date().getFullYear()} / Built with Next.js</p>
      </div>
    </footer>
);
}