<script>
	import Inventory from '$lib/Inventory.svelte';
	import CommandBox from '$lib/CommandBox.svelte';
	import Runtime from '$lib/Runtime.svelte';
	import Tile from '$lib/Tile.svelte';
	import Temperature24 from 'carbon-icons-svelte/lib/Temperature24';
	import CalculatorCheck24 from 'carbon-icons-svelte/lib/CalculatorCheck24';
	import MachineLearningModel24 from 'carbon-icons-svelte/lib/MachineLearningModel32';
	import FishMultiple24 from 'carbon-icons-svelte/lib/FishMultiple32';
	import Humidity24 from 'carbon-icons-svelte/lib/Humidity24';
	import Checkmark24 from 'carbon-icons-svelte/lib/Checkmark24';
	import WatsonHealthFusionBlender24 from 'carbon-icons-svelte/lib/WatsonHealthFusionBlender24';
	import WatsonHealthAiStatusRejected24 from 'carbon-icons-svelte/lib/WatsonHealthAiStatusRejected24';
	import Maintenance from '$lib/Maintenance.svelte';
	import Graph from '$lib/graph.svelte';
	let clicked_tile_index = -1;

	function select_tile(index) {
		clicked_tile_index = index;
	}
	const tiles = [
		{ title: 'Temperature', value: 30.05, icon: Temperature24 },
		{ title: 'State', value: 'Complete', icon: MachineLearningModel24 },
		{ title: 'Produced', value: 100, icon: FishMultiple24 },
		{ title: 'Humidity', value: 69.85, icon: Humidity24 },
		{ title: 'Amount to produce', value: 100, icon: FishMultiple24 },
		{ title: 'Acceptable products', value: 93, icon: Checkmark24 },
		{ title: 'Vibration', value: 1.76, icon: WatsonHealthFusionBlender24 },
		{ title: 'Products per minute', value: 189, icon: CalculatorCheck24 },
		{ title: 'Rejected products', value: 7, icon: WatsonHealthAiStatusRejected24 }
	];
</script>

<svelte:head>
	<title>Overview</title>
</svelte:head>

<main>
	<article>
		{#each tiles as tile, index}
			<Tile
				selected={clicked_tile_index === index}
				title={tile.title}
				value={tile.value}
				icon={tile.icon}
				on:click={() => select_tile(index)}
			/>
		{/each}
	</article>
    <Inventory/>
	<Maintenance/>
	<CommandBox />
	<Runtime />
</main>

<style>
	article {
		padding: 1em;
		background: #c4c4c4;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-gap: 1em;
	}
</style>
