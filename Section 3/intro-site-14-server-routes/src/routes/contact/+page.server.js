import { fail } from '@sveltejs/kit';

export const csr = false;
export const ssr = true;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// TODO log the user in
		const formData = await request.formData();
		const email = formData.get('email');
		const message = formData.get('message');
		const errors = {};
		if (!email) {
			errors.email = 'Email is required';
		}

		if (!message) {
			errors.message = 'Message is required';
		}

		if (!errors.message && !errors.email) {
			console.log(email, message, 'recieved message');
			return { success: true };
		}

		return fail(422, errors);
	}
};
