import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Section />
      <div onClick={() => queryClient.invalidateQueries(['todos'])}>
        Invalidate
      </div>
    </QueryClientProvider>
  )
}

function Section() {
  const fromQuery = useQuery(['todos'], query)

  console.log(fromQuery.data)

  return null
}

function* makeDataSource() {
  yield [1, 2, 3]
  yield [3, 4, 5]
  yield [5, 6, 7]
}

const ds = makeDataSource()

async function query() {
  return ds.next()?.value || []
}
