import * as React from 'react'
import {useController, useForm} from 'react-hook-form'
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
  const {control, reset} = useForm({})
  const fromQuery = useQuery(['todos'], query, {
    onSuccess: ([data]) => {
      reset(data)
    },
  })

  console.log(fromQuery.data)

  return (
    <>
      <Input name="value1" control={control} defaultValue="value1" />
      <Input name="value2" control={control} defaultValue="value2" />
      <Input name="value3" control={control} defaultValue="value3" />
    </>
  )
}

function* makeDataSource() {
  yield [{value1: `v11`, value2: `v12`, value3: `v13`}]
  yield [{value1: `v21`, value2: `v22`, value3: `v23`}]
  yield [{value1: `v31`, value2: `v32`, value3: `v31`}]
}

const ds = makeDataSource()

async function query() {
  return ds.next()?.value || []
}

function Input({name, control, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return <input {...field} />
}
