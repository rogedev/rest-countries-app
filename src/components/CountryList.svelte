<script>
  import CountryCard from './CountryCard.svelte'
  export let countries

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  let filtering = false
  let filteredCountries = []
  let nameFilter = null
  let regionFilter = null

  const applyFilters = () => {
    filtering = true
    filteredCountries = [...countries]
    if (nameFilter) filteredCountries = filterByName(filteredCountries, nameFilter)
    if (regionFilter) filteredCountries = filterByRegion(filteredCountries, regionFilter)
  }
  const filterByName = (arr, name) => {
    return [...arr].filter((x) => {
      return x.name.common.toLowerCase().includes(name.toLowerCase())
    })
  }
  const filterByRegion = (arr, region) => [...arr].filter((x) => x.region == region)

</script>

<header class="header">
  <nav class="nav">
    <h1>Where in the World?</h1>
    <button> Dark mode </button>
  </nav>
</header>
<div class="filters">
  <input bind:value={nameFilter} on:keyup={applyFilters} placeholder="Search for a country..." />

  <select bind:value={regionFilter} on:change={applyFilters}>
    {#each regions as region}
      <option value={region}> {region} </option>
    {/each}
  </select>
</div>

<div class="countries-list">
  {#if filtering}
    {#each filteredCountries as country} <CountryCard {country} /> {/each}
  {:else}
    {#each countries as country} <CountryCard {country} /> {/each}
  {/if}
</div>
<!--  TODO AGREGAR ESTILOS -->
<style>
  .header {
    width: 100%;
  }
  .nav {
    display: flex;
    flex-direction: row;
  }
  .countries-list {
    overflow: hidden;
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
</style>
