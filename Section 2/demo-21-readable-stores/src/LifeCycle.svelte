<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';

  let numbers = [];
  let unorderedListElement;
  let autoScroll = false;

  onMount(() => {
    const intervalId = setInterval(() => {
      numbers = [...numbers, numbers.length + 1];
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('also destroyed');
    };
  });

  beforeUpdate(() => {
    console.log('before update');
  });

  afterUpdate(() => {
    console.log('after update');
    if (autoScroll) {
      unorderedListElement.scrollTo(0, unorderedListElement.scrollHeight);
    }
  });

  onDestroy(() => {
    console.log('on destroy');
  });
</script>

<ul bind:this={unorderedListElement}>
  {#each numbers as number (number)}
    <li>{number}</li>
  {/each}
</ul>

<label>Auto Scroll <input type="checkbox" bind:checked={autoScroll} /></label>

<style>
  ul {
    max-height: 100px;
    border: solid black 1px;
    overflow-y: scroll;
  }
</style>
