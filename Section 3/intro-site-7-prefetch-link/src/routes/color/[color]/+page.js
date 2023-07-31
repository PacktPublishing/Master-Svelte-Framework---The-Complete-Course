/** @type {import('./$types').PageLoad} */

export function load({ params }) {
	return {
		color: params.color
	};
}
