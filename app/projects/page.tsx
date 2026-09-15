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
			<h1>Projects Overview</h1>
			{error ? <p>{error}</p> : <ProjectList projects={projects} />}
		</>
	);
}