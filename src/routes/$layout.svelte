<script>
	import { page } from '$app/stores';
	import Dashboard32 from 'carbon-icons-svelte/lib/Dashboard32';
	import Catalog32 from 'carbon-icons-svelte/lib/Catalog32';
</script>

<div id="wrapper">
	<h1>S4G1</h1>
	<nav>
		<a class:selected={$page.path === '/'} href="/"><Dashboard32 /></a>
		<a class:selected={$page.path === '/history'} href="history"><Catalog32 /></a>
	</nav>

	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
	}
	[id='wrapper'] {
		display: grid;
		grid-template-columns: 64px auto;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'sidebar header'
			'sidebar main';
		min-height: 100vh;
        grid-gap: 15px;
	}

	[id='wrapper'] header {
		display: grid;
		grid-area: header;
        border-bottom: 4px solid #388DA6;
        align-items: center;
	}
        [id='wrapper'] header h1 {
                margin: 0;
                padding: 0;
	}


	:global(a, a:visited) {
		color: inherit;
	}

	nav {
		display: grid;
		grid-auto-rows: 60px;
		padding-top: 100px;
		grid-area: sidebar;
		color: #bdbdbd;
		background: #525252;
	}

	nav a {
		display: grid;
		font-size: 2em;
		padding: 1px;
	}

	nav a.selected {
		background: #388da6;
		color: #ffffff;
	}

	main {
		display: grid;
		grid-area: main;
	}
</style>
