import greenlet from 'greenlet'
import * as React from 'react'

export default function App() {
  const [value, setValue] = React.useState(``)

  React.useEffect(() => {
    greenQueryName(`developit`).then(setValue)
  }, [])

  return (
    <>
      <button onClick={() => console.log(`boop`)}>Boop</button>
      <div>{value}</div>
    </>
  )
}

async function queryName({username}) {
  const url = `https://api.github.com/users/${username}`
  const profile = await fetch(url).then((r) => r.json())
  return profile.name
}

const greenQueryName = greenlet(queryName)
