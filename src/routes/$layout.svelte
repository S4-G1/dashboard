<script>
	import '../app.css';
	import CustomButton from '../lib/CustomButton.svelte';
	import Sidebar from '../lib/Sidebar.svelte';
	let sidebar_show = false;
</script>
<nav>
	<Sidebar bind:show={sidebar_show}/>
	<CustomButton on:click={() => sidebar_show = !sidebar_show}/>
</nav>