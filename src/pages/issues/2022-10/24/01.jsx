import * as React from 'react'
import {useController, useForm, useWatch} from 'react-hook-form'

export default function App() {
  const {control} = useForm({})

  return (
    <>
      <Input name="value1" control={control} defaultValue="value1" />
      <Input name="value2" control={control} defaultValue="value2" />
      <RerenderOnlyMePls control={control} />
    </>
  )
}

function RerenderOnlyMePls({control}) {
  const state = useWatch({control})

  console.log(state)

  return null
}

function Input({name, control, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return <input {...field} />
}
