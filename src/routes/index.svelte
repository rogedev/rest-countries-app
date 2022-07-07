<script>
	export let countries
	import CountryCard from "../components/CountryCard.svelte"
</script>

{#each countries as country}
<CountryCard country={country}/>
{:else} error
{/each}