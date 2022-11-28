import * as React from 'react'

export default function Page() {
  const [curState, setState] = React.useState(data)
  const remove = (id) => {
    setState((prev) =>
      prev.filter((v) => {
        return v.id !== id
      }),
    )
  }
  const clearAll = () => {
    setState([])
  }

  return (
    <>
      <button onClick={clearAll}></button>
      {curState.map((person, index) => {
        let {id, name, age, img} = person

        return (
          <div key={person.id.toString() + index}>
            <img src={img} alt="" />
            <h2> {name} </h2>
            <h2> {age} </h2>
            <button onClick={() => remove(id)}>Delete</button>
          </div>
        )
      })}
    </>
  )
}
let data = [
  {
    id: 1,
    name: 'Harry Styles',
    age: 24,
    img: null,
  },
  {
    id: 2,
    name: 'Jagdamba Banaraswale',
    age: 89,
    img: null,
  },
  {
    id: 3,
    name: 'Bunty bhutia',
    age: 33,
    img: null,
  },
  {
    id: 4,
    name: 'Chinku jhunjhunwala',
    age: 19,
    img: null,
  },
  {
    id: 5,
    name: 'Simran Kataria',
    age: 29,
    img: null,
  },
]
