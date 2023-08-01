import { writable } from 'svelte/store';
import { PUBLIC_ERROR_MESSAGE } from '$env/static/public'

const messageStore = writable({ show: false, message: '', type: 'error' })

export default {
    subscribe: messageStore.subscribe,
    showError: function (message = PUBLIC_ERROR_MESSAGE) {
        messageStore.set({ show: true, message, type: 'error' })
    },
    showSuccess: function (message) {
        messageStore.set({ show: true, message, type: 'success' })
    },
    hide: function () {
        messageStore.set({ show: false, message: '', type: 'success' })
    }
}