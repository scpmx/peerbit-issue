<script lang="ts">
    import { Peerbit } from "peerbit";

    async function init() {
        var pb = await Peerbit.create();

        return pb.peerId.toString();
    }
</script>

{#await init()}
    <p>loading...</p>
{:then x} 
    <p>{x}</p>
{/await}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
