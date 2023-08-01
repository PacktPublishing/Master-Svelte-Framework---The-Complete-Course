import { PUBLIC_API_KEY, PUBLIC_AUTH_DOMAIN, PUBLIC_PROJECT_ID, PUBLIC_STORAGE_BUCKET, PUBLIC_MESSAGING_SENDER_ID, PUBLIC_API_ID, PUBLIC_MEASUREMENT_ID } from '$env/static/public'
import { is_client } from 'svelte/internal';
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: PUBLIC_API_KEY,
    authDomain: PUBLIC_AUTH_DOMAIN,
    projectId: PUBLIC_PROJECT_ID,
    storageBucket: PUBLIC_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_MESSAGING_SENDER_ID,
    appId: PUBLIC_API_ID,
    measurementId: PUBLIC_MEASUREMENT_ID
};

if (getApps().length == 0) {
    const app = initializeApp(firebaseConfig);
    if (is_client) {
        getAnalytics(app)
    }
}

export const db = getFirestore()
