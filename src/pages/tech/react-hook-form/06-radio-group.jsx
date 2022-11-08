import * as React from 'react'
import {useController, useForm} from 'react-hook-form'

const options = [
  {label: `A label`, value: `A`},
  {label: `B label`, value: `B`},
  {label: `C label`, value: `C`},
]

export default function App() {
  const {control} = useForm({})

  return (
    <>
      <RadioGroup
        name="radio"
        control={control}
        options={options}
        defaultValue="B"
      />
    </>
  )
}

function RadioGroup({name, control, options, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return options.map((item) => (
    <label key={item.value}>
      {item.label}
      <input
        {...field}
        type="radio"
        checked={field.value === item.value}
        value={item.value}
      />
    </label>
  ))
}
