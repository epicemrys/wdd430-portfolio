import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "WDD 430 Portfolio",
    description:
      "A Next.js portfolio that presents selected coursework and demonstrates reusable React components, routing, and an API route.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/epicemrys/wdd430-portfolio",
  },
  {
    title: "Marriage Event Finder",
    description:
      "A final web application project for discovering and organizing marriage event information.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/epicemrys/wdd330-final-project-mef",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 lg:py-24">
      <section className="max-w-3xl border-l-4 border-amber-400 pl-6 sm:pl-8">
        <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-slate-500">
          Web developer / lifelong learner
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-7xl">
          Building useful things for the web.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m Charles Ukoh, a developer focused on thoughtful interfaces,
          practical software, and learning.
        </p>
      </section>

      <section className="mt-20" aria-labelledby="projects-heading">
        <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-200 pb-4">
          <div>
            <p className="font-mono text-sm text-amber-700">01 / selected work</p>
            <h2 id="projects-heading" className="mt-2 text-3xl font-semibold tracking-tight">
              Projects
            </h2>
          </div>
          <a className="hidden text-sm font-semibold text-slate-700 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-700 sm:block" href="https://github.com/epicemrys?tab=repositories" target="_blank" rel="noopener noreferrer">
            Browse GitHub &rarr;
          </a>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}