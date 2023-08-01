<script>
  import Team from './Team.svelte';
  let blueScore = 20;
  let redScore = 20;
  let winningText = '';
  $: redWon = blueScore === 0;
  $: blueWon = redScore === 0;
  $: gameOver = redWon || blueWon;

  function newGame() {
    redScore = 20;
    blueScore = 20;
  }
</script>

<div class="row mt-2">
  <div class="col">
    <h1 class="text-center">MTG Counter App</h1>
  </div>
</div>

<div class="row">
  <Team {gameOver} team="Red" bind:score={redScore} />
  <Team {gameOver} team="Blue" bind:score={blueScore} />
</div>

{#if !gameOver}
  <div class="row mt-3">
    <div class="col">
      <button on:click={newGame} class="btn btn-warning w-100"
        >Reset Game</button
      >
    </div>
  </div>
{:else}
  <div class="row mt-3">
    <div class="col">
      {#if blueWon}
        <h2 class="text-center text-primary">Blue Won</h2>
      {:else}
        <h2 class="text-center text-danger">Red Won</h2>
      {/if}
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <button on:click={newGame} class="btn btn-success w-100">New Game</button>
    </div>
  </div>
{/if}
