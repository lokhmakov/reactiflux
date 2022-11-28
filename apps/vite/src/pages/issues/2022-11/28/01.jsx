import * as React from 'react'

const inputs1 = [
  {name: `a`, defaultValue: `defaultA`},
  {name: `b`, defaultValue: `defaultB`},
]

const inputs2 = [
  {name: `c`, defaultValue: `defaultC`},
  {name: `d`, defaultValue: `defaultD`},
]

export default function Page() {
  return (
    <>
      <Inputs inputs={inputs1} />
      <Inputs inputs={inputs2} />
    </>
  )
}

function Inputs({inputs}) {
  const {values, onChange} = useInputs(inputs)

  return (
    <div>
      {inputs.map(({name}) => (
        <input
          key={name}
          name={name}
          value={values[name]}
          onChange={onChange}
        />
      ))}
    </div>
  )
}

function useInputs(inputs) {
  const [values, set] = React.useState(lazyGetValues(inputs))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = React.useCallback(lazyHandler(set), [])

  console.log({values})

  return {values, onChange}
}

const lazyGetValues = (list) => () =>
  list.reduce((r, v) => ((r[v.name] = v.defaultValue), r), {})

const lazyHandler =
  (set) =>
  ({target: {name, value}}) =>
    set((prev) => ({
      ...prev,
      [name]: value,
    }))
