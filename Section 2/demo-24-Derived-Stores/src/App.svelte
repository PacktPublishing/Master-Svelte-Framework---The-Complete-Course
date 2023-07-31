<script>
  import {
    storeOne,
    storeTwo,
    storeSumEven,
    storeOneEven,
  } from './stores/derived.store';
</script>

<h2>Sum of store is even: {$storeSumEven}</h2>

<h3>Store One: {$storeOne}</h3>
<input type="range" bind:value={$storeOne} min="0" max="10" />
<h3>Store Two: {$storeTwo}</h3>
<input type="range" bind:value={$storeTwo} min="0" max="10" />
<h1>Store One Even: {$storeOneEven}</h1>
