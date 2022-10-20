import * as React from 'react'
import {useController, useForm} from 'react-hook-form'

export default function App() {
  const {control} = useForm({})

  return <InputNumber name="value" control={control} defaultValue={5} />
}

function InputNumber({name, control, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return (
    <input
      type="number"
      {...field}
      value={getValue(field.value)}
      onChange={makeOnChangeNumber(field)}
    />
  )
}

const getValue = (v) => (isNaN(v) ? 0 : v)
const makeOnChangeNumber = (field) => (e) =>
  field.onChange(e.target.valueAsNumber)
