<script>
  export let countries
  import CountryList from '../components/CountryList.svelte'
  import Header from '../components/Header.svelte'
</script>

<Header />
<CountryList {countries} />
