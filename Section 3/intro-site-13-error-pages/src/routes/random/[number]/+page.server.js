import { RANDOM_NUMBER } from '$env/static/private';
import { error } from '@sveltejs/kit';
export function load({ params }) {
	const selectedNumber = +params.number;
	if (selectedNumber === 2) {
		throw error(403, { message: 'Snake Eyes!!!' });
	}
	return {
		won: selectedNumber === +RANDOM_NUMBER
	};
}
