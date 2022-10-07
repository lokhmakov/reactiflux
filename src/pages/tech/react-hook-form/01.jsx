import * as React from 'react'
import {useController, useForm, useWatch} from 'react-hook-form'

export default function App() {
  const {control, resetField} = useForm({})

  const value1 = useWatch({control, name: `minimumBid.value1`})

  React.useEffect(() => {
    resetField(`minimumBid.value2`)
  }, [value1])

  return (
    <>
      <Input name="minimumBid.value1" control={control} defaultValue="value1" />
      <Input name="minimumBid.value2" control={control} defaultValue="value2" />
    </>
  )
}

function Input({name, control, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return <input {...field} />
}
