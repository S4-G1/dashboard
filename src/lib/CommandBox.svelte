<script></script>

<main>
	<div>
		<h3>Start</h3>
	</div>
	<div>
		<h3>Stop</h3>
	</div>
	<div>
		<h3>Clear</h3>
	</div>
	<div>
		<h3>Reset</h3>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		background: #c4c4c4;
		padding: 10px;
		place-items: center;
		grid-gap: 10px;
	}

	main div {
		display: grid;
		background: #d4d4d4;
		width: 100%;
		place-items: center;
	}

	main div:hover {
		cursor: pointer;
	}

	main div h3 {
		text-transform: uppercase;
	}
</style>
