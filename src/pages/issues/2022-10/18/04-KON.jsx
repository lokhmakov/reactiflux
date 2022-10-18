import * as React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Section />
    </QueryClientProvider>
  )
}

function Section() {
  const fromQuery = useInfiniteQuery(['items'], () => query(), {
    getNextPageParam(lastPage) {
      return lastPage.nextPage
    },
    onSuccess({pages}) {
      const data = pages[pages.length - 1]
      if (data?.nextPage) {
        fromQuery.fetchNextPage()
      }
    },
  })

  console.log(fromQuery.data)

  return (
    <div>
      <button onClick={fromQuery.fetchNextPage}>next</button>
    </div>
  )
}

const makeId = () => Math.random().toString(32).slice(2)
const makeOne = (id = makeId()) => ({id, name: `name ${id}`})

function* makeDataSource() {
  yield {result: [makeOne(), makeOne(), makeOne()], nextPage: 1}
  yield {result: [makeOne(), makeOne(), makeOne()], nextPage: 2}
  yield {result: [makeOne(), makeOne(), makeOne()], nextPage: 3}
  yield {result: [makeOne(), makeOne(), makeOne()], nextPage: 4}
  yield {result: [makeOne(), makeOne()]}
}

const ds = makeDataSource()

async function query() {
  return ds.next()?.value || {}
}
