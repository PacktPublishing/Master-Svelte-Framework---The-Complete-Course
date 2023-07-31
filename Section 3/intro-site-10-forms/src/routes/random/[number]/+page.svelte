<script>
	export let data;
</script>

<h1>Random Number</h1>
{#if data.won}
	<h2>You won!!!</h2>
{:else}
	<h2>Try again!!</h2>
{/if}
