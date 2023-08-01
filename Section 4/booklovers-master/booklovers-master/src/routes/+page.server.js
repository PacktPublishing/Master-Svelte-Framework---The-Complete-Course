import { getBooks } from '$lib/firebase/database.server';

export async function load({ locals, url }) {
    const page = url.searchParams.get('page') || 1;
    const { books, next, previous } = await getBooks(locals?.user?.id, +page);
    return {
        books,
        next,
        previous,
        page
    }
}