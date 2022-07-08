export const get = async () => {
  const countries = await fetch('https://restcountries.com/v3.1/all')
  return {
    status: 200,
    body: {
      countries: await countries.json()
    }
  }
}
