<script>
	export let stock;
</script>
<style>
    .Inventory{
        border: solid black 3px;
        padding: 30px;
        height: 600px;
        max-width: 600px;
		margin-top: 40px;
		margin-left: 75%;
        overflow-y: scroll;
    }

    .stock {
        border: solid grey 3px;
        padding: 10px;
        margin: 15px;
        text-align: center;
    }

    /* .stockInner {
		color:black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-bottom: 10px;
	}

	.stockInner > div {
    } */
</style>

<div class="Inventory">
	<div class="stock">
		<slot {stock}></slot>	
	</div>
</div>