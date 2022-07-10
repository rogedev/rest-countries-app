<script>
  import { onMount } from 'svelte'
  import CountryCard from './CountryCard.svelte'

  export let countries

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  let countriesList = []
  let nameFilter = null
  let regionFilter = null
  let showFilter = false

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

  const filterByRegion = (region) => [...countriesList].filter((x) => x.region.toLowerCase() == region.toLowerCase())

  const sortBy = (sortField, sortOrder) => {
    const arr = [...countriesList]
    switch (sortField) {
      case 'name':
        arr.sort((a) => a.name.common)
      case 'region':
        arr.sort((a) => a.region)
      case 'population':
        arr.sort((a, b) => a.population - b.population)
    }
    return sortOrder == 'asc' ? arr : arr.reverse()
  }

  const handleFilterClick = () => {
    showFilter = !showFilter
  }

  const onChange = (event) => {
    regionFilter = event.currentTarget.value
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
    <!-- TODO fix dropdown -->
    <div class="dropdownDiv">
      <a href class="dropdownBtn" on:click={handleFilterClick}> Filter by Region </a>
      {#if showFilter}
        <ul class="dropdownUL">
          {#each regions as region}
            <li>
              <input
                class="dropdownInput"
                type="radio"
                bind:group={regionFilter}
                on:change={onChange}
              />
              <p for={region}>{region}</p>
            </li>
          {/each}
          <li>
            <input
              id="radioAll"
              class="dropdownInput"
              type="radio"
              name="all"
              value="All Regions"
              checked={(regionFilter = '')}
              on:change={onChange}
            />
            <p>All Regions</p>
          </li>
        </ul>
      {/if}
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
  .dropdownBtn {
    display: block;
    background: #fff;
    height: 50px;
    width: 160px;
    box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
    padding-right: 30px;
    padding-left: 30px;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dropdownBtn::after {
    font-weight: 900;
    content: '\f107';
  }
  .dropdownUL {
    padding-left: 0;
    text-align: left;
    background-color: #fff;
    margin-top: 3px;
    padding: 10px 0;
    box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
    border-radius: 3px;
    position: absolute;
    width: 220px;
  }
  .dropdownUL li {
    list-style: none;
    line-height: 2;
    cursor: pointer;
  }
  .dropdownUL li p {
    cursor: pointer;
    padding: 0 26px;
    display: block;
    width: 148px;
  }
  .dropdownUL li:hover {
    background-color: #f9f9f9;
  }
  .dropdownInput {
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute;
  }
  input[type='radio'] {
    -webkit-appearance: radio;
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
    .dropdownDiv {
      margin-top: 40px;
    }
  }
</style>
