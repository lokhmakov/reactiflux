import * as React from 'react'

export default function App() {
  const [value, setValue] = React.useState(() => ({
    name: 'Bob',
    age: 24,
  }))

  const [trigger, setTrigger] = React.useState(false)

  console.log(value)

  const fnOne = () => setValue((prev) => ({...prev, age: 64}))
  const fnTwo = () => setValue((prev) => ({...prev, name: 'John'}))

  function onClick() {
    fnOne()
    fnTwo()
  }

  React.useEffect(() => {
    if (trigger) {
      fnOne()
      fnTwo()
    }
  }, [trigger])

  return (
    <>
      <button onClick={onClick}>click me!</button>
      <button onClick={() => setTrigger(true)}>trigger</button>
    </>
  )
}
