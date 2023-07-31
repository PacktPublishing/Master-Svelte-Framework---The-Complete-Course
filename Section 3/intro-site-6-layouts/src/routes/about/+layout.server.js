import { SUPER_SECRET } from '$env/static/private';

export function load() {
	return {
		secret: SUPER_SECRET
	};
}
