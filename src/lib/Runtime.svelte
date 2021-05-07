<script>
	import { time } from '$lib/stores';
	import { format } from '$lib/date';
	let start_date = new Date();

	$: runtime = format($time - start_date);
</script>

<main>
	<h2>{runtime}</h2>
</main>

<style>
	main {
		border-bottom: 6px solid #0aae41;
		background: #c4c4c4;
		display: grid;
		place-items: center;
	}
	h2 {
		padding: 10px;
		margin: 0;
	}
</style>
