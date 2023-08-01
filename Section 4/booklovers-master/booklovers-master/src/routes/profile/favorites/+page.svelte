<script>
	import Book from '$lib/components/Books/Book.svelte';

	export let data;

	function filterUnlikedBooks(e) {
		const { id } = e.detail;
		data.books = data.books.filter((b) => b.id !== id);
	}
</script>

{#each data.books as book (book.id)}
	<Book {book} on:toggle_like={filterUnlikedBooks} />
{/each}
