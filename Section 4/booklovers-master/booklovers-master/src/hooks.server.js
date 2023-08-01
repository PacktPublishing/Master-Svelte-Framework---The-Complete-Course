import { auth } from '$lib/firebase/firebase.server';
import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    const protectRoutes = [
        '/add',
        '/edit',
        '/profile'
    ];

    const guessRoutes = [
        '/login',
        '/signup',
        '/forgot-password'
    ];

    try {
        event.locals.user = await getFirebaseUser(event.cookies.get('jwt'))
    } catch (error) {
        event.locals.user = null;
    }

    const user = event.locals?.user;
    const url = event.url;

    if (url.pathname !== '/') {
        if (!user && protectRoutes.find(u => url.pathname.indexOf(u) > -1)) {
            throw redirect(302, `/login?redirect=${url.pathname}`);
        }
        if (user && guessRoutes.find(u => url.pathname.indexOf(u) > -1)) {
            throw redirect(302, '/');
        }
    }


    const response = await resolve(event);

    return response;
}

async function getFirebaseUser(token) {
    if (!token) {
        return null;
    }

    const decodedToken = await auth.verifyIdToken(token, true);
    const user = await auth.getUser(decodedToken.uid);

    return {
        id: user.uid,
        email: user.email
    }
}