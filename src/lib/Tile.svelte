<script>
	export let icon;
	export let value;
	export let title;
	export let selected = false;
</script>

<main class:selected on:click>
	<svelte:component this={icon} />
	<span class="title">{title}</span>
	<span class="value">{value}</span>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
		padding: 1em;
		background: #d4d4d4;
		user-select: none;
		text-align: center;
	}

	:global(svg),
	span {
		display: grid;
		place-self: center;
	}

	.title,
	.value {
		text-transform: uppercase;
	}

	.selected {
		background: #388da6;
		color: #ffffff;
	}

	.value {
		font-weight: bold;
		font-size: 28px;
		margin: 0;
	}
</style>
