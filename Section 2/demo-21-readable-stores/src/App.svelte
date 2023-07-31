<script>
  import GeoLocation from './GeoLocation.svelte';
  let show = false;
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <GeoLocation />
{/if}
