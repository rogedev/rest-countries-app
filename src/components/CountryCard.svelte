<script>
  export let country
</script>

<div class="country">
  <p>{country.name.common}</p>
  <img src={country.flags.svg} alt={country.name.common} />
</div>

<style>
  .country {
    width: 100%;
    margin: 0;
  }
</style>
