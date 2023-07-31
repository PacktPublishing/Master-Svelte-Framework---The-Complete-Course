<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function handleClick(e) {
    dispatch('custom_event', Math.random());
  }
</script>

<div on:click={handleClick} />

<style>
  div {
    width: 90%;
    height: 300px;
    margin-top: 30px;
    background-color: aquamarine;
  }
</style>
