<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import Nav from '$lib/components/Nav.svelte';
	import messagesStore from '$lib/stores/messages.store';
	import '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { sendJWTToken } from '$lib/firebase/auth.client';
	import authStore from '$lib/stores/auth.store';
	import bookNotifyStore from '$lib/stores/book-notify.store';
	import { onDestroy } from 'svelte';

	let notifyBook;

	const unsub = bookNotifyStore.subscribe((book) => {
		if (!$authStore.isLoggedIn) {
			notifyBook = book;
			return;
		}

		if ($authStore.userId !== book.user_id) {
			notifyBook = book;
			return;
		}
	});

	onDestroy(() => {
		unsub();
	});

	function closeAlert() {
		notifyBook = null;
	}

	export let data;

	let isLoggedIn = data.isLoggedIn;

	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;

	let timerId;
	async function sendServerToken() {
		try {
			await sendJWTToken();
		} catch (error) {
			clearInterval(timerId);
			messagesStore.showError();
			console.log(error);
		}
	}

	onMount(async () => {
		try {
			await sendServerToken();
			timerId = setInterval(async () => {
				await sendServerToken();
			}, 1000 * 10 * 60);
		} catch (e) {
			console.log(e);
			messagesStore.showError();
		}

		return () => {
			clearInterval(timerId);
		};
	});

	function closeMessage() {
		messagesStore.hide();
	}
</script>

<Nav {isLoggedIn} />
<main class="container">
	{#if $messagesStore.show}
		<div class="row mt-3">
			<div class="col">
				<div
					class:alert-danger={$messagesStore.type === 'error'}
					class:alert-success={$messagesStore.type === 'success'}
					class="alert alert-dismissible"
					role="alert"
				>
					<strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}:</strong>
					{$messagesStore.message}
					<button type="button" on:click={closeMessage} class="btn-close" aria-label="Close" />
				</div>
			</div>
		</div>
	{/if}
	<slot />
	{#if notifyBook}
		<div
			class="toast show position-fixed top-0 end-0 m-3"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
		>
			<div class="toast-header">
				<strong class="me-auto">New Book</strong>
				<button
					on:click={closeAlert}
					type="button"
					class="btn-close"
					data-bs-dismiss="toast"
					aria-label="Close"
				/>
			</div>
			<div class="toast-body">
				Book <a data-sveltekit-preload-data="hover" href="/book/{notifyBook.id}"
					>{notifyBook.title}</a
				> just created!!
			</div>
		</div>
	{/if}
</main>
