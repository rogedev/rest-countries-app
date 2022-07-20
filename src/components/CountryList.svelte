<script>
  import { onMount } from 'svelte'
  import CountryCard from './CountryCard.svelte'
  import Select from 'svelte-select'

  export let countries

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All']

  let countriesList = []
  let nameFilter = null
  let regionFilter = null

  onMount(async () => (countriesList = [...countries]))

  const applyFilters = () => {
    countriesList = [...countries]
    if (nameFilter) countriesList = filterByName(nameFilter)
    if (regionFilter) countriesList = filterByRegion(regionFilter)
  }
  const filterByName = (name) => {
    return [...countriesList].filter((x) => {
      return x.name.common.toLowerCase().includes(name.toLowerCase())
    })
  }

  const filterByRegion = (region) => {
    if (region.toLowerCase() === 'all') return countriesList
    return [...countriesList].filter((x) => x.region.toLowerCase() == region.toLowerCase())
  }

  const onChangeSelect = (event) => {
    regionFilter = event.detail.value
    applyFilters()
  }
</script>

<div class="countries-section">
  <div class="searchBar">
    <div class="searchContainer">
      <i class="fas fa-search searchIcon" />
      <input
        class="searchInput"
        placeholder="Search for a country..."
        bind:value={nameFilter}
        on:keyup={applyFilters}
      />
    </div>
    <div class="region-select">
      <Select
        items={regions}
        value={regionFilter}
        on:select={onChangeSelect}
        isSearchable="true"
        placeholder="Filter by Region"
      />
    </div>
  </div>

  <div class="countries-list">
    {#each countriesList as country} <CountryCard {country} class="country" /> {/each}
  </div>
</div>

<!--  TODO AGREGAR ESTILOS -->
<style>
  .countries-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 25px 50px 0;
    margin: 0 auto;
    max-width: 1450px;
  }
  .searchBar {
    padding: 35px 75px;
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }
  .searchContainer {
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
    width: 500px;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }
  .searchIcon {
    font-size: 16px;
    color: #848484;
    padding-right: 30px;
  }
  .searchInput {
    border: none;
    font-size: 14px;
    font-family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    width: 420px;
  }
  .region-select {
    position: relative;
    width: 200px;
  }

  @media (max-width: 875px) {
    .countries-list {
      justify-content: center;
      padding-left: 50px;
    }
    .searchBar {
      flex-direction: column;
      padding: 25px 15px;
    }
    .searchContainer {
      width: inherit;
    }
  }
</style>
