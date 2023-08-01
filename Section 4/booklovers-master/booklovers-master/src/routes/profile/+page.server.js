import { getBooksForUser } from '$lib/firebase/database.server';

export async function load({ locals }) {
    const books = await getBooksForUser(locals.user.id)

    return {
        books
    }
}