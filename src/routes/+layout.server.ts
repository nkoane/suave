import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	return { user: locals.user ? locals.user : null };
}) satisfies LayoutServerLoad;
