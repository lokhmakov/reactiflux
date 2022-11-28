import * as React from 'react'

export default function Page() {
  const [targetCountry, setTargetCountry] = React.useState(``)
  const [countries, setCountries] = React.useState(null)

  console.log(countries)

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetchFlags(targetCountry, {signal}).then(setCountries).catch(console.warn)

    return () => controller.abort()
  }, [targetCountry])

  return <input value={targetCountry} onChange={(e) => setTargetCountry(e.target.value)} />
}

const baseUrl = `https://restcountries.com/v3.1/`

const getPath = targetCountry => targetCountry ? `name/${targetCountry}` : `all`

function fetchFlags(targetCountry, options) {
  const url = new URL(getPath(targetCountry), baseUrl)

  return fetch(url, options)
      .then((response) => response.json())
      .then((data) => data.slice(0, 10))
}