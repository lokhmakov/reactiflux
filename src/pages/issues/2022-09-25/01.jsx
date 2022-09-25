import * as React from 'react'

export default function App() {
  const [list, setList] = React.useState([1, 2, 3, 4, 5])
  const [value, setValue] = React.useState()

  return (
    <>
      {[<div key="0">a</div>, null, <div key="2">b</div>]}
      {list.map((v, i) =>
        value === i ? null : (
          <div key={i} onClick={() => setValue(i)}>
            {v}
          </div>
        ),
      )}
    </>
  )
}
