import { addBook } from '$lib/firebase/database.server';
import validateBook from '$lib/validators/book.validator';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const data = await validateBook(formData);
        if (!data.success) {
            return fail(422, data)
        }

        const bookId = await addBook(data.book, locals.user.id);

        throw redirect(303, `/book/${bookId}`);
    }
}