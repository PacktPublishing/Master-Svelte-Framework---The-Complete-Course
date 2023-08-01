import { goto } from '$app/navigation';
import { sendJWTToken } from '$lib/firebase/auth.client';
import { setUser } from '$lib/firebase/database.client';


export async function afterLogin(url, userId) {
    const route = url.searchParams.get('redirect') || '/';
    await setUser(userId)
    await sendJWTToken();
    await goto(route);
}