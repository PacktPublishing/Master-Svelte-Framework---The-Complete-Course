<script>
	import Like from '$lib/components/Books/Like.svelte';
	export let data;
	let book = data.book;
</script>

<div class="row mt-3">
	<div class="col">
		<h1>Title: {book.title}</h1>
	</div>
</div>
<div class="row">
	<div class="col">
		<h2>Author: {book.author}</h2>
	</div>
</div>
<div class="row">
	<div class="col">
		<img class="main-image" src={book.main_picture} alt={book.title} />
	</div>
</div>
<div class="row mt-3">
	<div class="col">
		<pre>{book.description}</pre>
	</div>
</div>
<div class="row">
	<div class="col">
		<Like {book} textAlign="center" />
	</div>
</div>

<svelte:head>
	<title>Book Lovers - {book.title}</title>
</svelte:head>

<style>
	.main-image {
		max-height: 300px;
	}
	.row {
		text-align: center;
	}
</style>
