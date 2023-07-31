export const csr = true;
export const ssr = false;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		id: params.id
	};
}
