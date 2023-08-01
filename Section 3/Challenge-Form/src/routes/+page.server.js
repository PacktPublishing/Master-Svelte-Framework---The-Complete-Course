import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const width = formData.get('width') || 0;
        const height = formData.get('height') || 0;
        const color = formData.get('color');
        let errors = {};
        if (width <= 0) {
            errors['error_width'] = 'Width must be greater than zero';
        }
        if (height <= 0) {
            errors['error_height'] = 'Height must be greater than zero';
        }

        if (errors.error_width || errors.error_height) {
            return fail(422, { ...errors, height, width, color });
        }

        return { height, width, color, success: true };
    }
};
