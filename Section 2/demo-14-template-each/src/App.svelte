<script>
  let colorList = ['red', 'green', 'blue', 'purple'];
  let color = '';
  function addColor() {
    if (color !== '') {
      colorList = [color, ...colorList];
      color = '';
    }
  }
</script>

<ul>
  {#each colorList as color}
    <li>{color}</li>
  {/each}
</ul>

<input type="text" bind:value={color} />
<button on:click={addColor}>Add Color</button>
