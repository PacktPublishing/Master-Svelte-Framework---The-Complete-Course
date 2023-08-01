<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<h1>Div Creator Form</h1>

{#if form && form.success}
	<h2>Your DIV</h2>
	<div style="width: {form.width}px; height: {form.height}px; background-color: {form.color}" />
{:else}
	<form method="POST">
		<label for="width">Width</label>
		<input id="width" type="number" name="width" value={form?.width === 0 ? '' : form?.width} />
		{#if form && form.error_width}
			<p>{form.error_width}</p>
		{/if}
		<br />
		<label for="height">Height</label>
		<input id="height" type="number" name="height" value={form?.height === 0 ? '' : form?.height} />
		{#if form && form.error_height}
			<p>{form.error_height}</p>
		{/if}
		<br />
		<label for="color">Color</label>

		<select name="color" id="color">
			<option selected={form?.color === 'red'} value="red">Red</option>
			<option selected={form?.color === 'green'} value="green">Green</option>
			<option selected={form?.color === 'blue'} value="blue">Blue</option>
		</select>
		<br />
		<button type="submit">Create DIV</button>
	</form>
{/if}
