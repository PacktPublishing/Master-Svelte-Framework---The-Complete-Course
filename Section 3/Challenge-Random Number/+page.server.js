import { RANDOM_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit';
export function load({ params, locals }) {
	if (locals.user && !locals.user.admin) {
		throw error(403, { message: 'This is an admin only page.' });
	}

	const selectedNumber = +params.number;
	if (selectedNumber === 2) {
		throw error(403, { message: 'Snake Eyes!!!' });
	}
	return {
		won: selectedNumber === +RANDOM_NUMBER
	};
}