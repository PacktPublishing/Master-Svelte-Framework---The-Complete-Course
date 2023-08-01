<script>
  import Slider from './Slider.svelte';
  let redColor = 100;
  let greenColor = 0;
  let blueColor = 0;
  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  $: hexColor = rgbToHex(redColor, greenColor, blueColor);
</script>

<div class="row">
  <div class="col">
    <h1>Color Picker</h1>
  </div>
</div>
<div class="row">
  <div class="column">
    <form>
      <Slider colorName="Red" bind:colorValue={redColor} />
      <Slider colorName="Green" bind:colorValue={greenColor} />
      <Slider colorName="Blue" bind:colorValue={blueColor} />
    </form>
  </div>
</div>
<div class="row">
  <div class="column">
    <div
      id="color"
      style="background-color: rgb({redColor}, {greenColor}, {blueColor})"
    />
  </div>
</div>
<div class="row">
  <div class="column">
    <h2>rgb({redColor}, {greenColor}, {blueColor})</h2>
  </div>
</div>
<div class="row">
  <div class="column">
    <h2>Hex Color: {hexColor}</h2>
  </div>
</div>

<style>
  #color {
    height: 300px;
    border: dashed 5px;
  }
  h2 {
    text-align: center;
    margin-top: 20px;
  }
</style>