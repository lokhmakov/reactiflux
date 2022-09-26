import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export default function App() {
  const fromQuery = useQuery()

  console.log(fromQuery)

  return (
    <>
      {fromQuery.pending ? <CircularProgress /> : null}
      {fromQuery.error ? <div>{fromQuery.error.message}</div> : null}
      {fromQuery.data.map((name, key) => (
        <div key={key}>{name}</div>
      ))}
    </>
  )
}

function useQuery() {
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState([])
  const [pending, setPending] = React.useState(false)

  function onError(error) {
    console.warn(error)
    setError({message: error.message})
  }

  React.useEffect(() => {
    setPending(true)
    query()
      .then(setData)
      .catch(onError)
      .finally(() => setPending(false))
  }, [])

  return {data, error, pending}
}

const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))

async function fetchApi(params) {
  await delay(params.timeout)
  return [`item1`, `item2`, `item3`]
}

async function query(params = {}) {
  const {timeout = 2000, timeoutApi = 3000} = params

  return Promise.race([
    delay(timeout).then(() =>
      Promise.reject(new Error(`Something goes wrong`)),
    ),
    fetchApi({timeout: timeoutApi}),
  ])
}
