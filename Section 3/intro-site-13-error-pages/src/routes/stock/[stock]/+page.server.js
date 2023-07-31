import { API_KEY } from '$env/static/private';
import { PUBLIC_API_KEY } from '$env/static/public';
import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	try {
		const url = `https://api.polygon.io/v2/aggs/ticker/${params.stock}/range/1/day/2023-01-09/2023-01-09?apiKey=${API_KEY}`;
		const response = await fetch(url);
		const json = await response.json();
		if (json.status === 'ERROR') {
			throw error(500, 'There was an error');
		}
		return json;
	} catch (e) {
		throw error(500, 'There was an error');
	}
}
