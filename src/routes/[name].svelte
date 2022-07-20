<script>
  import Header from '../components/Header.svelte'
  import CountryCard from '../components/CountryCard.svelte'
  export let country
</script>

<Header />
<CountryCard country={country[0]} />

<!-- TODO  country details component -->