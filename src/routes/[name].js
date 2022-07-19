export const get = async ({ params }) => {
  const country = await fetch(`https://restcountries.com/v3.1/name/${params.name}`)
  return {
    status: 200,
    body: {
      country: await country.json()
    }
  }
}
