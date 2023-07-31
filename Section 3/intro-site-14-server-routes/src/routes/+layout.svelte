<script>
	import { page } from '$app/stores';

	export let data;
</script>

<nav>
	<li>
		<a class:active={$page.url.pathname === '/'} data-sveltekit-preload-data href="/">Home</a>
	</li>
	<li>
		<a class:active={$page.url.pathname === '/contact'} data-sveltekit-preload-data href="contact"
			>Contact</a
		>
	</li>
	<li>
		<a class:active={$page.url.pathname === '/about'} data-sveltekit-preload-data href="about"
			>About</a
		>
	</li>
</nav>
<!-- <h1>{data.name}</h1>
<h2>Path: {$page.url.pathname}</h2> -->
<main>
	<slot />
</main>

<style>
	.active {
		color: salmon;
	}
</style>
