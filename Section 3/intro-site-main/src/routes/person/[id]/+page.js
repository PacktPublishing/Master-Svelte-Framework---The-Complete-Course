import { error } from '@sveltejs/kit';

export const csr = true;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (+params.id === 44) {
		throw error(404, { message: 'Person not found' });
	}
	return {
		id: params.id
	};
}
