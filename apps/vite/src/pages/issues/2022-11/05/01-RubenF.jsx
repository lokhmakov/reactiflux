import * as React from 'react'
import {useController, useForm} from 'react-hook-form'

export default function App() {
  const {fields, control} = useDynamicForm()

  return fields.map((item) => (
    <Input
      name={item.name}
      control={control}
      defaultValue={item.defaultValue}
    />
  ))
}

function Input({name, control, defaultValue}) {
  const {field} = useController({
    name,
    control,
    defaultValue,
  })

  return <input {...field} />
}

function useDynamicForm() {
  const [fields, setFields] = React.useState([])
  const {control} = useForm({})

  React.useEffect(() => {
    query().then(setFields).catch(console.log)
  }, [])

  return {control, fields}
}

async function query() {
  return [
    {name: `input1`, defaultValue: `foo`},
    {name: `input2`, defaultValue: `bar`},
    {name: `input3`, defaultValue: `baz`},
  ]
}
