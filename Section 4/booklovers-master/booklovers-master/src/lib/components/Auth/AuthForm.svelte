<script>
	export let btnName;
	export let forgotPassword = false;
</script>

<form on:submit|preventDefault>
	<div class="mb-3">
		<label for="email" class="form-label">Email</label>
		<input type="email" name="email" class="form-control" id="email" placeholder="Email" required />
	</div>
	{#if !forgotPassword}
		<div class="mb-3">
			<label for="password" class="form-label">Password</label>
			<input
				type="password"
				name="password"
				class="form-control"
				id="password"
				placeholder="*********"
			/>
		</div>
	{/if}
	<button type="submit" class="btn btn-success w-100">{btnName}</button>
</form>
