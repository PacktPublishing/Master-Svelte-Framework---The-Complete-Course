<script>
  let left = 100;
  let top = 100;
  function clickMe(e) {
    console.log(e);
    alert('Clicked');
  }
  function onInput(e) {
    console.log(e.target.value, 'input');
  }
  function onChange(e) {
    console.log(e, 'change');
  }
  function onKeyup(e) {
    switch (e.key) {
      case 'ArrowUp':
        top -= 10;
        break;
      case 'ArrowDown':
        top += 10;
        break;
      case 'ArrowLeft':
        left -= 10;
        break;
      case 'ArrowRight':
        left += 10;
        break;
    }
  }
  function handleSubmit(e) {
    console.log('handlesubmit');
  }
</script>

<button on:click|once={clickMe}>Click Me</button>
<input type="range" on:input={onInput} on:change={onChange} />
<svelte:window on:keydown={onKeyup} />
<form on:submit|stopPropagation|preventDefault={handleSubmit}>
  <button type="submit">Submit Form</button>
</form>
<div style="left: {left}px; top: {top}px;" />

<style>
  div {
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: aqua;
  }
</style>
