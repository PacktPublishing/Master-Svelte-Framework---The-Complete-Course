<script>
  export let top = 100;
  export let left = 100;
  let moving = true;
  function startMove() {
    moving = true;
  }

  function stopMove() {
    moving = false;
  }

  function move(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }
</script>

<div
  on:mousedown={startMove}
  on:mouseup={stopMove}
  style="left: {left}px; top: {top}px;"
  class="draggable"
>
  <slot />
</div>
<svelte:window on:mouseup={stopMove} on:mousemove={move} />

<style>
  .draggable {
    user-select: none;
    position: absolute;
    border: solid gray 1px;
    cursor: move;
  }
</style>
