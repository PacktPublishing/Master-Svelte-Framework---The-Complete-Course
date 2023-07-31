<script>
	/** @type {import('./$types').ActionData} */
	export let form;
	import { enhance } from '$app/forms';
</script>

<h1>Contact</h1>
{#if form && form.success}
	<h2>Message Recieved</h2>
{:else}
	<form use:enhance method="POST">
		<label for="email">Email</label>
		<input type="email" name="email" id="email" />
		<br />
		{#if form && form.email}
			<p>{form.email}</p>
		{/if}
		<label for="message">Message</label>
		<br />
		<textarea name="message" id="message" cols="30" rows="10" />
		<br />
		{#if form && form.message}
			<p>{form.message}</p>
		{/if}
		<button type="submit">Send Message</button>
	</form>
{/if}
