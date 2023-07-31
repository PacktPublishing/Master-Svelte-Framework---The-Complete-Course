<script>
  let name = 'Joe';
  $: capitalizedName = name.toUpperCase();
  let age = 33;
  $: dogYears = age * 7;
  let red = 10;
  let blue = 0;
  let green = 0;
  let highGreen = false;
  $: colorValue = color(red, green, blue);
  $: console.log(green);
  $: {
    console.log(green, 'green');
    console.log(red, 'red');
  }

  $: if (green > 100) {
    highGreen = true;
  }

  function color(red, green, blue) {
    return `rgb(${red}, ${green}, ${blue})`;
  }

  setTimeout(() => {
    green += 150;
  }, 1500);
</script>

<h2>{name}</h2>
<h2>{capitalizedName}</h2>

<input type="text" bind:value={name} />

<h2>Age: {age}</h2>
<h2>Dog years: {dogYears}</h2>
<input type="number" bind:value={age} />

<h2>Color Value: {colorValue}</h2>
<h2>{highGreen ? 'HIGH ' : 'LOW '} Green</h2>
