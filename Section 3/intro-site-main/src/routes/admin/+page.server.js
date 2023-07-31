import { error } from '@sveltejs/kit';

export function load({ locals }) {
	if (locals.user && locals.user.admin) {
		return { success: true };
	}

	throw error(403, { message: 'Admins only!!' });
}
