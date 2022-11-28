import * as React from 'react'
import {useController, useForm} from 'react-hook-form'

export default function App() {
  const {control} = useForm({
    defaultValues: {
      radio: 'B',
    },
  })

  return (
    <>
      <Radio name="radio" control={control} label="A" value="A" />
      <Radio name="radio" control={control} label="B" value="B" />
      <Radio name="radio" control={control} label="C" value="C" />
    </>
  )
}

function Radio({label, name, control, defaultValue, value}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <label>
      {label}
      <input type="radio" {...field} checked={field.value === value} />
    </label>
  )
}
