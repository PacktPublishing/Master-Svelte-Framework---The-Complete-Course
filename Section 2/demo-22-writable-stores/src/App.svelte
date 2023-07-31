<script>
  import { onDestroy } from 'svelte';
  import countStore from './stores/count.store';
  const unsub = countStore.subscribe((n) => {
    console.log(n, 'count store');
  });

  function add() {
    countStore.update((n) => n + 1);
  }

  function minus() {
    countStore.update((n) => n - 1);
  }

  //   setTimeout(() => {
  //     countStore.set(2000);
  //   }, 2000);

  //   setTimeout(() => {
  //     countStore.update((n) => {
  //       return n + 300;
  //     });
  //   }, 2000);

  onDestroy(() => {
    unsub();
  });
</script>

<h1>{$countStore}</h1>
<button on:click={add}>+</button>
<button on:click={minus}>-</button>
