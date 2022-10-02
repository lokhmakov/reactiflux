import * as React from 'react'

export default function App() {
  return <Field />
}

function Field() {
  const fieldRef = React.useRef()
  const [value, setValue] = React.useState(``)

  function onFocus() {
    fieldRef.current?.focus()
  }

  return (
    <div className="flex flex-col">
      <TextField innerRef={fieldRef} value={value} onChangeValue={setValue} />
      <button onClick={onFocus}>focus</button>
    </div>
  )
}

function TextField({innerRef, value, onChangeValue}) {
  return (
    <input
      className="border-2"
      ref={innerRef}
      onChange={(e) => onChangeValue?.(e.target.value)}
      value={value}
    />
  )
}
