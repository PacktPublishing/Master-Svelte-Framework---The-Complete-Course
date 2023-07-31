<script>
  import LifeCycle from './LifeCycle.svelte';
  let show = false;
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <LifeCycle />
{/if}
