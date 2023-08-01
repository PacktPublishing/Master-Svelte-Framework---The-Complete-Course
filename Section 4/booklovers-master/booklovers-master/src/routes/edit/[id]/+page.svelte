<script>
	import BookForm from '$lib/components/Books/BookForm.svelte';

	export let data;
	export let form;
</script>

<BookForm form={{ ...data.book, ...form }} />
