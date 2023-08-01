import { getLikedBooks } from '$lib/firebase/database.server';

export async function load({ locals }) {
    const books = await getLikedBooks(locals.user.id);

    return {
        books
    }
}