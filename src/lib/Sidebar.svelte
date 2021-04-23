<script>
    import { fly } from 'svelte/transition';
    import Modal from './Modal.svelte';
    import CustomButton from './CustomButton.svelte';
    import HistoryButton from './HistoryButton.svelte';
    import IndexButton from './IndexButton.svelte';

    export let show = false;
    let modal_show = false;

    function handleClick() {
        alert('You have been cucked');
    }
    function handleIndexClick() {
        alert('Index not found');
    }
    function handleHistoryClick() {
        alert('History not found');
    }
</script>
{#if show}
    <nav transition:fly={{x: 250, opacity: 1}}>
        <CustomButton on:click={handleClick}/>
        <IndexButton on:click={handleIndexClick}/>
        <HistoryButton on:click={handleHistoryClick}/>
    </nav>
{/if}

<Modal bind:show={modal_show} />



<style>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        padding: 2rem 1rem 0.6rem;
        border-left: 1px solid #aaa;
        background: #fff;
        overflow-y: auto;
        width: 10rem;
    }
</style>