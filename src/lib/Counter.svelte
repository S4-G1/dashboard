<script>
	let count = 0;

	const increment = () => {
		count += 1;
	};

    const decrement = () => {
        count -= 1;
        alert("Contribute to github.com/S4-G1/dashboard")
    };
</script>

    {#if count === 10}
        <h1>We don't think so... do you?</h1>
        <button on:click={decrement}>{count}</button>
    {:else}
        <h1>Can you reach 11?</h1>
        <button on:click={increment}>{count}</button>
    {/if}

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: rgba(255, 62, 0, 0.1);
		border-radius: 2em;
		border: 2px solid #ff3e00;
		outline: none;
		width: 200px;
		height: 60px;
		font-variant-numeric: tabular-nums;
	}

	button:focus,
	button:hover {
		border: 3px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}
</style>
