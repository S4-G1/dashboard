<script>
    export let barley = "0.100KG";
    export let malt = "0.080KG";
    export let hops = "0.080KG";
    export let wheat = "0.080KG";
    export let yeast = "0.080KG";
</script>

<style>
    main {
        display: grid;
        grid-template-rows: 30px 1fr;
        place-items: center;
        background: #C4C4C4;
        grid-gap: 10px;
    }
    span {
        text-transform: uppercase;
    }

    main article {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        grid-template-rows: repeat(5, 1fr);
    }

    main article div {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr;
    }

    main article div span.name {
        background: #0AAE41;
    }
</style>

<main>
    <span>Inventory Status</span>
    <article>
        <div>
            <span class="name">Barley</span>
            <span>{barley}</span>
        </div>

        <div>
            <span class="name">Malt</span>
            <span>{malt}</span>
        </div>

        <div>
            <span class="name">Hops</span>
            <span>{hops}</span>
        </div>

        <div>
            <span class="name">Wheat</span>
            <span>{wheat}</span>

        </div>
        <div>
            <span class="name">Yeast</span>
            <span>{yeast}</span>
        </div>
    </article>
</main>
