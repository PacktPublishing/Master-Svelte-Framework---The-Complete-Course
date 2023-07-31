<script>
  let show = false;
  function exampleAction(node) {
    const contextFunc = (e) => {
      e.preventDefault();
      alert('Right Click');
    };
    node.addEventListener('contextmenu', contextFunc);
    return {
      destroy() {
        console.log('destroy was called');
        node.removeEventListener('contextmenu', contextFunc);
      },
    };
  }
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <div use:exampleAction />
{/if}

<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
