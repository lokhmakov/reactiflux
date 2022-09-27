import * as React from 'react'

export default function App() {
  const [state, setState] = React.useState({
    book: true,
    table: false,
  })

  const onChange = ({target: {name, checked}}) =>
    setState((prev) => ({...prev, [name]: checked}))

  return (
    <>
      <div>
        <input
          name="book"
          type="checkbox"
          checked={state.book}
          onChange={onChange}
        />
      </div>
      <div>
        <button
          onClick={() => setState((prev) => ({...prev, book: !prev.book}))}
        >
          Toggle
        </button>
      </div>
    </>
  )
}
