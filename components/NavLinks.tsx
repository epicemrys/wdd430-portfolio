"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "Work" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
];

export default function NavLinks() {
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const isActive =
					pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

				return (
					<li key={link.href}>
						<Link
							className={isActive ? "text-amber-700" : "hover:text-amber-700"}
							href={link.href}
							aria-current={isActive ? "page" : undefined}
						>
							{link.label}
						</Link>
					</li>
				);
			})}
		</>
	);
}