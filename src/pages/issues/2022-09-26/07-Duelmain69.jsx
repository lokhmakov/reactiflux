import * as React from 'react'
import {useQuery, QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Section />
    </QueryClientProvider>
  )
}

function Section() {
  const [form, setForm] = React.useState({
    a: 2,
    b: 3,
  })

  const fromQuery = useQuery(['query', form], query)

  return null
}

async function query({queryKey}) {
  const [_key, {a, b}] = queryKey

  return [1, a, b]
}
