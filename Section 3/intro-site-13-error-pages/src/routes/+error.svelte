<script>
	import { page } from '$app/stores';
</script>

<h1>Error</h1>
<h2>Message: {$page.error?.message}</h2>
<h2>Status Code: {$page.status}</h2>
