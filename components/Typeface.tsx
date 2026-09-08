interface TypefaceProps {
  title: string;
  description: string;
}

export default function Typeface({ title, description }: TypefaceProps) {
  return (
    <aside className="border-t-4 border-amber-400 bg-slate-950 p-6 text-white">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-300">{title}</p>
      <p className="mt-6 text-2xl font-semibold leading-tight">{description}</p>
      <div className="mt-8 h-px bg-slate-700" />
      <p className="mt-4 text-sm leading-6 text-slate-400">Based in the Africa. Open to learning, collaboration, and good questions.</p>
    </aside>
  );
}