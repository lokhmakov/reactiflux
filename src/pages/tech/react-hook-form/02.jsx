import * as React from 'react'
import {useController, useForm, useWatch} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'

const schema = z.object({
  minimumBid: z.object({
    value1: z.string().refine(
      async (v) => {
        return v.length > 5
      },
      {
        message: `v.length > 5`,
      },
    ),
    value2: z.string(),
  }),
})

export default function App() {
  const {control, resetField, formState, trigger} = useForm({
    // mode: `onChange`,
    resolver: zodResolver(schema),
  })

  return (
    <>
      <Input name="minimumBid.value1" control={control} defaultValue="value1" />
      <Input
        name="minimumBid.value2"
        control={control}
        defaultValue="value2"
        trigger={trigger}
        triggerList={[`minimumBid.value1`]}
      />
      {JSON.stringify(formState.errors)}
    </>
  )
}

function Input({name, control, defaultValue, triggerList, trigger}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  function onChange(...params) {
    if (trigger && triggerList) {
      trigger(triggerList)
    }
    field.onChange(...params)
  }

  return <input {...field} onChange={onChange} />
}
