interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white p-6 transition-colors hover:border-amber-400">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 flex-1 leading-7 text-slate-600">{description}</p>
      <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
        <strong className="font-semibold text-slate-700">Stack:</strong> {technologies.join(' / ')}
      </p>
      {link && (
        <p className="mt-5">
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-700 underline decoration-amber-300 decoration-2 underline-offset-4 hover:text-amber-900">View project &rarr;</a>
        </p>
      )}
    </article>
  );
}