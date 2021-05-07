<script>
	import { page } from '$app/stores';
	import Dashboard32 from 'carbon-icons-svelte/lib/Dashboard32';
	import Catalog32 from 'carbon-icons-svelte/lib/Catalog32';
	console.log($page.path);
</script>

<div id="wrapper">
	<h1>Bieproductie</h1>

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
		grid-template-columns: 50px auto;
		grid-template-rows: 60px auto;
		grid-template-areas:
			'sidebar header'
			'sidebar main';
		min-height: 100vh;
	}

	[id='wrapper'] h1 {
		display: grid;
		grid-area: header;
	}

	:global(a, a:visited) {
		color: inherit;
	}

	nav {
		display: grid;
		grid-auto-rows: 50px;
		padding-top: 100px;
		grid-area: sidebar;
		color: #bdbdbd;
		background: #525252;
	}

	nav a {
		display: grid;
		place-self: center;
		border: 2px solid #bdbdbd;
		font-size: 2em;
		padding: 1px;
	}

	nav a.selected {
		background: #388da6;
		color: #ffffff;
		border: none;
	}

	main {
		display: grid;
		grid-area: main;
	}
</style>
