<script>
	import AuthForm from '$lib/components/Auth/AuthForm.svelte';
	import { mailResetPasswordEmail } from '$lib/firebase/auth.client';
	import messagesStore from '$lib/stores/messages.store';
	let hideForm = false;
	async function onForgotPassword(e) {
		try {
			const formData = new FormData(e.target);
			const email = formData.get('email');
			await mailResetPasswordEmail(email);
			hideForm = true;
			messagesStore.showSuccess('Reset Password Email Sent! :)');
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				messagesStore.showError('Email not found, please try again.');
				return;
			}
			messagesStore.showError();
		}
	}
</script>

<div class="row">
	<div class="col">
		<h1>Forgot Password</h1>
	</div>
</div>

{#if !hideForm}
	<AuthForm on:submit={onForgotPassword} forgotPassword={true} btnName="Forgot Password" />
{/if}
<svelte:head>
	<title>Book Lovers - Forgot Password</title>
</svelte:head>
