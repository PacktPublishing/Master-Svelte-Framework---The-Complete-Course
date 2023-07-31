<script>
  let colorName = 'red';
  let isChecked = false;
</script>

{#if colorName.toLowerCase() === 'blue'}
  <h2>Blue</h2>
{:else if colorName.toLowerCase() === 'red'}
  <h2>Red</h2>
{:else}
  <h2>Some other color</h2>
{/if}
<input type="text" bind:value={colorName} />
<input type="checkbox" bind:checked={isChecked} />
<hr />
{#if isChecked}
  <h2>You win!!!</h2>
{/if}
