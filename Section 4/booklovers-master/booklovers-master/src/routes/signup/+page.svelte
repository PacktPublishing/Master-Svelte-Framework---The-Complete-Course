<script>
	import { goto } from '$app/navigation';
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import LoginWithGoogle from '$lib/components/Auth/LoginWithGoogle.svelte';
	import { registerWithEmailandPassword } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	import { page } from '$app/stores';
	import { afterLogin } from '$lib/helpers/route.helper';

	async function register(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			const password = formData.get('password');
			if (!email || !password) {
				messagesStore.showError('Please enter a valid email and password.');
				return;
			}

			if (password.length < 6) {
				messagesStore.showError('Password must be 6 characters or more.');
				return;
			}

			const user = await registerWithEmailandPassword(email, password);
			afterLogin($page.url, user.uid);
		} catch (e) {
			if (e.code === 'auth/email-already-in-use') {
				messagesStore.showError('You have already registered, please log in.');
				await goto('/login');
				return;
			}
			console.log(e);
			messagesStore.showError();
		}
	}
</script>

<div class="row">
	<div class="col">
		<h1>Sign Up</h1>
	</div>
</div>
<hr />
<AuthForm on:submit={register} btnName="Sign Up!" />
<hr />
<LoginWithGoogle />
<svelte:head>
	<title>Book Lovers - Sign Up</title>
</svelte:head>
