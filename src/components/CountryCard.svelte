<script>
  export let country
</script>

<div class="country">
  <img class="country-img" src={country.flags.svg} alt={country.name.common} />
  <div class="country-info">
    <h2 class="country-name">{country.name.common}</h2>
    <p class="country-data"><span>Population:</span> {country.population}</p>
    <p class="country-data"><span>Region:</span> {country.region}</p>
    <p class="country-data"><span>Region:</span> {country.capital}</p>
  </div>
</div>

<style>
  .country {
    width: 50%;
    margin: 0;
  }
  .country-img {
    max-width: fit-content;
  }
</style>
