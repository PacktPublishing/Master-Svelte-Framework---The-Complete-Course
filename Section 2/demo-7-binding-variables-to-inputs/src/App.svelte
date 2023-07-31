<script>
  let name = 'Ash';
  let fontSize = 30;
  let disabled = true;
  setTimeout(() => {
    name = 'Carson';
  }, 1000);
</script>

<h1>Hello Svelte Developer</h1>
<input type="range" bind:value={fontSize} />
<h2 style="font-size: {fontSize}px">Font Size: {fontSize}px</h2>
<h2>Hello {name}</h2>
<input type="text" bind:value={name} />
<button {disabled}>Click Me</button>
