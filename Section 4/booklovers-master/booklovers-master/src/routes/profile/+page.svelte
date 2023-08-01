<script>
	import Book from '$lib/components/Books/Book.svelte';

	export let data;
</script>

{#each data.books as book (book.id)}
	<Book {book} />
{/each}
