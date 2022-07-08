<script>
  export let countries
  import CountryList from '../components/CountryList.svelte'
</script>

<div class="container">
  <CountryList {countries} />
</div>
