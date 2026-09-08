import Typeface from "@/components/Typeface";

export default function About() {
	return (
		<main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:px-10 lg:py-24">
			<p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-700">02 / about</p>
			<h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">A little context.</h1>
			<div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
				<div className="space-y-5 text-lg leading-8 text-slate-600">
					<p>
						I&apos;m Charles Ukoh, a web developer building a foundation in modern
						JavaScript and full-stack application development.
					</p>
					<p>
						This portfolio is a working record of that process. Each project is an
						opportunity to practice clear structure, accessible interfaces, and code
						that is easy for the next person to understand.
					</p>
				</div>
				<Typeface title="Current typeface" description="Curious, practical, and always improving." />
			</div>
		</main>
	);}