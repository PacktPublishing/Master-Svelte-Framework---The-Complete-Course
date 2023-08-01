<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import { page } from '$app/stores';
	let isOpen = false;
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Noah's Site</a>
		<button
			on:click={toggleOpen}
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class:show={isOpen} class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/'} class="nav-link" aria-current="page" href="/"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/about'} class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<a class:active={$page.url.pathname === '/contact'} class="nav-link" href="/contact"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
<main class="container">
	<slot />
</main>
