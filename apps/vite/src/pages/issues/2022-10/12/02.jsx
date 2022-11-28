import * as React from 'react'

export default function App() {
  const [result, setResult] = React.useState([])
  const [errors, setErrors] = React.useState([])

  React.useEffect(() => {
    query().then(setResult).catch(setErrors)
  }, [])

  if (result.length < 1) {
    return <div>Loading...</div>
  }

  return result.map((v, key) => <div key={key}>{v}</div>)
}

const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))
async function query() {
  await delay(500)
  return [1, 2, 3]
}
