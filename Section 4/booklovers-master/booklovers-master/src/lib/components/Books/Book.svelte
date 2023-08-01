<script>
	import { goto } from '$app/navigation';
	import Like from './Like.svelte';
	export let book;

	function goToBookPage() {
		goto(`/book/${book.id}`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={goToBookPage} class="row mt-2">
	<div class="col col-12 col-sm-6 col-md-4">
		<img src={book.small_picture} alt={book.title} />
	</div>
	<div class="col col-12 col-sm-6 col-md-8">
		<h2>Title: {book.title}</h2>
		<h2>Author: {book.author}</h2>
		<p>
			{book.short_description}
		</p>
		<Like {book} on:toggle_like />
	</div>
</div>

<style>
	img {
		max-width: 90%;
		margin: 5px auto;
		max-height: 200px;
		display: block;
	}
	.row {
		border: solid 1px gray;
		cursor: pointer;
	}
</style>
