import * as React from 'react'

export default function Page() {
  const {names} = useQuery()
  const [value, setValue] = React.useState(``)

  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {names.map((name, key) => (
        <option key={key}>{name}</option>
      ))}
    </select>
  )
}

function useQuery() {
  const [names, setNames] = React.useState([])

  React.useEffect(() => {
    query().then(setNames).catch(console.warn)
  }, [])

  return {names}
}

async function query() {
  return [`name1`, `name2`, `name3`]
}
