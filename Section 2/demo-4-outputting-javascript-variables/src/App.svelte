<script>
  let name = 'Bob';
  let favoriteColor = 'red';
  let favoriteNumber = 30;
  let fontSize = 20;
  setTimeout(function () {
    favoriteColor = 'blue';
    fontSize = 400;
  }, 1000);
</script>

<h1>Hello You Svelte Developer</h1>
<p style="color: {favoriteColor};">{name.toUpperCase()}</p>
<p>{favoriteNumber / 30}</p>
<p style="font-size: {fontSize}px;">{fontSize}</p>
