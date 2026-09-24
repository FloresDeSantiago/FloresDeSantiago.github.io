import { getCollection } from 'astro:content';

// A previous/next link between entries.
export interface Entry {
	href: string;
	title: string;
}

// Newest year first; within a year, lower `order` first, then alphabetical.
export async function getProjects() {
	const projects = await getCollection('projects');
	return projects.sort(
		(a, b) =>
			b.data.year - a.data.year ||
			a.data.order - b.data.order ||
			a.data.title.localeCompare(b.data.title),
	);
}

// Newest first; drafts are hidden.
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date) {
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	});
}
