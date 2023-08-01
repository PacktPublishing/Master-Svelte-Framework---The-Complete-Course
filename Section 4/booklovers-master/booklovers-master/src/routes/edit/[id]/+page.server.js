import { editBook, getBook } from '$lib/firebase/database.server';
import { error, fail, redirect } from '@sveltejs/kit';
import validateBook from '$lib/validators/book.validator.js';

export async function load({ params, locals }) {
    const book = await getBook(params.id);

    if (!book) {
        throw error(404, { message: "Book not found!" });
    }

    if (book.user_id !== locals.user.id) {
        throw error(403, { message: 'Access Denied!' });
    }

    return { book }
}

export const actions = {
    default: async ({ request, locals, params }) => {
        const book = await getBook(params.id);

        if (!book || book.user_id !== locals.user.id) {
            throw error(403, { message: 'Access Denied!' });
        }

        const formData = await request.formData();
        const data = await validateBook(formData, true);
        if (!data.success) {
            return fail(422, data);
        }

        await editBook(params.id, data.book, locals.user.id);

        throw redirect(303, `/book/${params.id}`);
    }
}