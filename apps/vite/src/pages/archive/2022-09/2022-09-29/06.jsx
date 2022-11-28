import * as React from 'react'

export default function App() {
  const [value, setValue] = React.useState(false)

  console.log(value)

  return <div onClick={() => setValue()}>click me</div>
}
