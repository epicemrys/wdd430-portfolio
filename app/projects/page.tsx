"use client";

import { useEffect, useState } from "react";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/lib/projects-db";

export default function ProjectsPage() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/projects")
			.then((response) => {
				if (!response.ok) throw new Error("Sorry, unable to load projects");
				return response.json() as Promise<Project[]>;
			})
			.then(setProjects)
			.catch((fetchError: Error) => setError(fetchError.message));
	}, []);

	return (
		<>
			<h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Projects Overview</h1>
			{error ? (
				<p className="mt-8 text-lg leading-8 text-slate-600">{error}</p>
			) : (
				<div className="mt-10">
					<ProjectList projects={projects} />
				</div>
			)}
		</>
	);
}