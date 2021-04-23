<script>
	import Inventory from '$lib/Inventory.svelte';
	
	let stockList = ["mel","dej","hej","ko"];
</script>

<Inventory stocks={stockList} let:stock>
	<div>
		{stock}
	</div>
</Inventory>