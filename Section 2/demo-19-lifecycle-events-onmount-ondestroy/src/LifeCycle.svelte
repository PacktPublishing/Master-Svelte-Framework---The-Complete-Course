<script>
  import { onMount, onDestroy } from 'svelte';
  let quote = '';
  let error = false;
  let loading = true;
  onMount(async () => {
    try {
      const url = 'https://zenquotes.io/api/random';
      const response = await fetch(url);
      const [quoteMessage] = await response.json();
      quote = quoteMessage.q;
    } catch (e) {
      error = true;
    }
    loading = false;
  });

  onDestroy(() => {
    console.log('on destroy');
  });
</script>

{#if loading}
  <h2>Loading...</h2>
{:else if error}
  <h2>Quote API not working</h2>
{:else}
  <h2>{quote}</h2>
{/if}
