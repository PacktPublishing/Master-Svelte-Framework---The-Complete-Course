<script>
  import { onDestroy } from 'svelte';
  import store from './stores/GeoLocation.Store';
  //   const unsub = store.subscribe((info) => {
  //     console.log(info, 'info');
  //   });

  //   onDestroy(() => {
  //     unsub();
  //     console.log('un subscribe');
  //   });
</script>

{#if !$store.working && !$store.errorMessage}
  <h2>Gathering Location</h2>
{:else if $store.errorMessage}
  <h2>Error: {$store.errorMessage}</h2>
{:else}
  <h2>Lat: {$store.lat} Lng: {$store.lng}</h2>
{/if}
