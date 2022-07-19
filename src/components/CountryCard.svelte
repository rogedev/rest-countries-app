<script>
  export let country
  const formatNumbers = (value) => `${value.toLocaleString()}`
</script>

<a class="country" href="/{country.name.common.toLowerCase()}">
  <img class="flag" src={country.flags.png} alt={country.name.common} />
  <div class="text">
    <h1>{country.name.common}</h1>
    <p><span>Population: </span>{formatNumbers(country.population)}</p>
    <p><span>Region: </span> {country.region}</p>
    <p><span>Capital: </span> {country.capital}</p>
  </div>
</a>

<style>
  .country {
    display: inline-block;
    background-color: #fff;
    width: 300px;
    box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;
    text-align: left;
    margin: 0 25px 80px;
    text-decoration: none;
    color: inherit;
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
  }

  .flag {
    height: 180px;
    width: 300px;
    border-radius: 3px 3px 0 0;
  }
  .text {
    padding-left: 30px;
    padding-right: 20px;
  }
  .text h1 {
    font-size: 20px;
  }
  .text p span {
    font-weight: 600;
  }
  .text p {
    line-height: 1;
  }
  ::placeholder {
    font-weight: 600;
  }
</style>
