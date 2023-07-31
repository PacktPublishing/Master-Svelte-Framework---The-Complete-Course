import { RANDOM_NUMBER } from '$env/static/private';
export function load({ params }) {
	const selectedNumber = +params.number;
	return {
		won: selectedNumber === +RANDOM_NUMBER
	};
}
