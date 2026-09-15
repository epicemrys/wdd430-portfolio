export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "WDD 430 Portfolio",
    description:
      "A Next.js portfolio that presents selected coursework and demonstrates reusable React components, routing, and an API route.",
    type: "school",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/epicemrys/wdd430-portfolio",
  },
  {
    id: 2,
    title: "Marriage Event Finder",
    description:
      "A final web application project for discovering and organizing marriage event information.",
    type: "opensource",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/epicemrys/wdd330-final-project-mef",
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter((project) => project.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((project) => project.id === id) ?? null;
}