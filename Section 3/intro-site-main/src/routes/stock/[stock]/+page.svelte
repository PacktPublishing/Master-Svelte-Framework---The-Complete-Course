<script>
	import { PUBLIC_API_KEY } from '$env/static/public';

	export let data;
	console.log(data, 'stock');
</script>

<h1>Stock {data.ticker}</h1>
<h2>PUBLIC API KEY {PUBLIC_API_KEY}</h2>
{#if data.results.length > 0}
	<p>High Price: {data.results[0].h}</p>
	<p>Low Price: {data.results[0].l}</p>
	<p>Closing Price: {data.results[0].c}</p>
{:else}
	<p>No Stock Found</p>
{/if}
