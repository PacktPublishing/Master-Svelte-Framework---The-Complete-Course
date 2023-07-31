/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.user = await getUser();

	const response = await resolve(event);
	return response;
}

async function getUser() {
	return {
		email: 'noah@blues.com',
		admin: true
	};
}
