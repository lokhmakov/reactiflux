import * as React from 'react'

export default function App() {
  const ref = React.useRef<HTMLInputElement>(null)

  return (
    <>
      <button onClick={() => ref.current?.focus()}>focus</button>
      <Section ref={ref} />
    </>
  )
}

const Section = React.forwardRef((_props, ref) => {
  const innerRef = React.useRef<HTMLInputElement>(null)

  React.useImperativeHandle(ref, () => innerRef.current)

  return (
    <>
      <input ref={innerRef} />
      <button onClick={() => innerRef.current?.focus()}>internal</button>
    </>
  )
})
