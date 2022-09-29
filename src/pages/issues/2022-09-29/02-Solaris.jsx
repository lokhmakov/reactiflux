import * as React from 'react'

export default function App() {
  const [value, setValue] = React.useState(() => ({
    name: 'Bob',
    age: 24,
  }))

  console.log(value)

  const fnOne = () => setValue((prev) => ({...prev, age: 64}))
  const fnTwo = () => setValue((prev) => ({...prev, name: 'John'}))

  function onClick() {
    fnOne()
    fnTwo()
  }

  React.useEffect(() => {
    onClick()
  }, [])

  return <>{JSON.stringify(value)}</>
}
