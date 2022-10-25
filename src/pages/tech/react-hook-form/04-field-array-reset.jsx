// https://codesandbox.io/s/react-hook-form-reset-usefieldarray-p111q?file=/src/index.js:1529-1533
// https://stackoverflow.com/questions/62242657/how-to-change-react-hook-form-defaultvalue-with-useeffect

import * as React from 'react'
import {useController, useForm, useFieldArray, useWatch} from 'react-hook-form'

export default function App() {
  const [values, setValues] = React.useState([
    {name: `value1`},
    {name: `value2`},
    {name: `value3`},
  ])
  const {control, reset} = useForm({
    defaultValues: {
      data: values,
    },
  })
  const {fields} = useFieldArray({
    control,
    name: `data`,
  })

  const state = useWatch({control})
  console.log(state)

  function load() {
    query().then((data) => {
      setValues(data)
      reset({data})
    })
  }

  return (
    <>
      <button onClick={load}>load new values</button>
      {fields.map((v, index) => {
        const name = `data[${index}].name`
        return <Input key={name} name={name} control={control} />
      })}
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

async function query() {
  return [{name: `value4`}, {name: `value5`}]
}
