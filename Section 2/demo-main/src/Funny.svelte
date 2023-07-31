<script>
  export let fontSize = 100;
  setInterval(() => {
    if (fontSize === 150) {
      fontSize = 5;
    } else {
      fontSize += 1;
    }
  }, 10);
</script>

<h2 style="font-size: {fontSize}px">No soap radio.</h2>
