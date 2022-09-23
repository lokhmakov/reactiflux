import * as React from 'react'

export default function App() {
  const [value, setValue] = React.useState() // Your shared state

  return (
    <>
      {/* Your router stuff */}
      <Page1 onClick={() => setValue(true)} />
      <Page2 value={value} />
    </>
  )
}

function Page1(props) {
  return <button onClick={props.onClick}>click me!</button>
}

function Page2(props) {
  return props.value ? `Show` : `Hide`
}
