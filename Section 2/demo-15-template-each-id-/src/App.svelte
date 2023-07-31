<script>
  let colorList = ['red', 'green', 'blue', 'purple'];
  let color = '';
  function addColor() {
    if (color !== '' && !colorList.includes(color)) {
      colorList = [color, ...colorList];
      color = '';
    } else {
      alert('Color must be present and not exist in the list.');
    }
  }
</script>

<ul>
  {#each colorList as color, index (color)}
    <li>{index + 1}. {color}</li>
  {/each}
</ul>

<input type="text" bind:value={color} />
<button on:click={addColor}>Add Color</button>
