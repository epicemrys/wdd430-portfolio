export default function ContactPage() {
	return (
		<main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:px-10 lg:py-24">
			<p className="font-mono text-sm uppercase tracking-[0.2em] text-amber-700">03 / contact</p>
			<h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Let&apos;s connect.</h1>
			<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                <a href="https://www.linkedin.com/in/charlesukoh" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">
                  LinkedIn
                </a>
                <br />
                <a href="https://github.com/epicemrys" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline">
                  GitHub
                </a>
			</p>
		</main>
	);
}